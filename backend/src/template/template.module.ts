import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { SlideController } from 'src/slide/slide.controller';
import { SlideService } from 'src/slide/slide.service';

@Module({
  controllers: [TemplateController, SlideController],
  providers: [TemplateService, SlideService],
})
export class TemplateModule {}
