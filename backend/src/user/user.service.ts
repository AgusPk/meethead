import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, User } from 'src/user/schemas/user.schema';
import { CreateContactDto } from './dto/create-contact.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(createUser: CreateUserDto): Promise<User> {
    try {
      return await this.userModel.create(createUser);
    } catch {
      throw new Error('Error creating user');
    }
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }

  async createContact(userId: string, newContact: CreateContactDto) {
    if (!userId || !newContact.firstName || !newContact.linkedInURL)
      throw new Error('Error creating contact');
    try {
      return await this.userModel.findByIdAndUpdate(userId, {
        $push: { contacts: newContact },
      });
    } catch {
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
