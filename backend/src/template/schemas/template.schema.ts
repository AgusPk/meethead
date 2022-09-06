import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Slide } from 'src/slide/schemas/slide.schema';

export type TemplateDocument = Template & Document;

@Schema({ collection: 'templates' })
export class Template {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  layoutId: string;

  @Prop([Slide])
  slides: Slide[];
}

export const TemplateSchema = SchemaFactory.createForClass(Template);
