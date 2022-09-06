import { Slide } from 'src/slide/schemas/slide.schema';

export class CreateTemplateDto {
  name: string;
  userId: string;
  layoutId: string;
  slides: Slide[];
}
