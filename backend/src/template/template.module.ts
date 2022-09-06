import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { SlideController } from 'src/slide/slide.controller';
import { SlideService } from 'src/slide/slide.service';
import { Template, TemplateSchema } from './schemas/template.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Template.name, schema: TemplateSchema },
    ]),
  ],
  controllers: [TemplateController, SlideController],
  providers: [TemplateService, SlideService],
})
export class TemplateModule {}
