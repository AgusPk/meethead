import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TemplateService } from './template.service';
import { CreateTemplateDTO } from '@popr-project/types';
import { UpdateTemplateDTO } from './dto/update-template.dto';
import { Template } from './schemas/template.schema';

@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Post()
  createTemplate(@Body() template: CreateTemplateDTO): Promise<Template> {
    try {
      if (!template.name || !template.userId || !template.layoutId) {
        throw new Error('Error creating template');
      }
      return this.templateService.createTemplate(template);
    } catch {
      throw new Error('Error creating template');
    }
  }

  @Get()
  findAll() {
    return this.templateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templateService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTemplateDTO: UpdateTemplateDTO,
  ) {
    return this.templateService.update(id, updateTemplateDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templateService.remove(id);
  }
}
