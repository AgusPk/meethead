import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, User, UserSchema } from 'src/schemas/user.schema';
import { CreateContactDto } from './dto/create-contact.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(createUser: User): Promise<User> {
    return await this.userModel.create(createUser);
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
    return await this.userModel.findByIdAndDelete(userId, {
      $push: { contacts: newContact },
    });
  }
}
