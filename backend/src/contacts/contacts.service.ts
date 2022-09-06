import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/schemas/user.schema';
import { CreateContactDTO } from '@meethead/types';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async createContact(userId: string, newContact: CreateContactDTO) {
    if (!userId || !newContact.name || !newContact.linkedInURL) {
      throw new Error('Error creating contact');
    }
    try {
      return await this.userModel.findByIdAndUpdate(userId, {
        $push: {
          contacts: {
            ...newContact,
            logoS3Id: newContact.companyLogoUrl,
            profilePictureS3Id: newContact.profilePictureUrl,
          },
        },
      });
    } catch (error) {
      throw new Error('Error creating contact');
    }
  }

  async getContacts(userId: string) {
    try {
      if (!userId) throw new Error('Error getting contacts');
      const user = await this.userModel.findById(userId);
      return user.contacts;
    } catch {
      throw new Error('Error getting contacts');
    }
  }
}
