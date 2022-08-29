import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
  @Prop()
  firstName: string;

  @Prop()
  profilePictureS3Id: string;

  @Prop()
  companyName: string;

  @Prop()
  logoS3Id: string;

  @Prop()
  companyPosition: string;

  @Prop()
  linkedInURL: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
