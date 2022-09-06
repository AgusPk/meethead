import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SlideDocument = Slide & Document;

@Schema()
export class Slide {
  @Prop()
  header: string;

  @Prop()
  main: string;

  @Prop()
  footer: string;
}

export const SlideSchema = SchemaFactory.createForClass(Slide);
