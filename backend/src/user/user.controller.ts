import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/user/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    return this.userService.create(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Post('/:id/contacts')
  async createContact(
    @Param('id') userId: string,
    @Body() contact: CreateContactDto,
  ): Promise<User> {
    return this.userService.createContact(userId, contact);
  }

  @Get('/:id/contacts')
  async getContacts(@Param('id') userId: string): Promise<CreateContactDto[]> {
    return this.userService.getContacts(userId);
  }
}
