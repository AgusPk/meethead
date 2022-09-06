import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, User } from 'src/user/schemas/user.schema';
import { CreateUserDTO } from '@meethead/types';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(createUser: CreateUserDTO): Promise<User> {
    try {
      return await this.userModel.create(createUser);
    } catch {
      throw new Error('Error creating user');
    }
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  update(id: string, updateUserDTO: UpdateUserDTO) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
