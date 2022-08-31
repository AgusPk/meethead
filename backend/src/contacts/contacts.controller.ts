import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/user/schemas/user.schema';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contacts/')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post(':id')
  async createContact(
    @Param('id') userId: string,
    @Body() contact: CreateContactDto,
  ): Promise<User> {
    return this.contactsService.createContact(userId, contact);
  }

  @Get(':id')
  async getContacts(@Param('id') userId: string): Promise<CreateContactDto[]> {
    return this.contactsService.getContacts(userId);
  }
}
