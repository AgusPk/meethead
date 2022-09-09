import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Template, TemplateSchema } from './schemas/template.schema';
import { TemplateController } from './template.controller';
import { SlideController } from 'src/slide/slide.controller';
import { TemplateService } from './template.service';
import { SlideService } from 'src/slide/slide.service';

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
