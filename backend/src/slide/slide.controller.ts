import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SlideService } from './slide.service';
import { CreateSlideDTO } from '@popr/types';
import { UpdateSlideDTO } from './dto/update-slide.dto';
import { Template } from 'src/template/schemas/template.schema';

@Controller('slide')
export class SlideController {
  constructor(private readonly slideService: SlideService) {}

  @Post('/:id')
  addSlides(
    @Param('id') templateId: string,
    @Body() slides: CreateSlideDTO[],
  ): Promise<Template> {
    return this.slideService.addSlides(templateId, slides);
  }

  @Get()
  findAll() {
    return this.slideService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slideService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSlideDTO: UpdateSlideDTO) {
    return this.slideService.update(id, updateSlideDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slideService.remove(id);
  }
}
