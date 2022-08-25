import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Contact } from './contact.schema';

export type UserDocument = User & Document;

@Schema({ collection: 'users' })
export class User {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop([Contact])
  contacts: Contact[];
}

export const UserSchema = SchemaFactory.createForClass(User);
