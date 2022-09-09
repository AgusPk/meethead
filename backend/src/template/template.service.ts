import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTemplateDTO } from '@popr/types';
import { UpdateTemplateDTO } from './dto/update-template.dto';
import { Template, TemplateDocument } from './schemas/template.schema';

@Injectable()
export class TemplateService {
  constructor(
    @InjectModel(Template.name)
    private templateModel: Model<TemplateDocument>,
  ) {}

  async createTemplate(template: CreateTemplateDTO): Promise<Template> {
    return await this.templateModel.create(template);
  }

  findAll() {
    return `This action returns all template`;
  }

  findOne(id: string) {
    return `This action returns a #${id} template`;
  }

  update(id: string, updateTemplateDTO: UpdateTemplateDTO) {
    return `This action updates a #${id} template`;
  }

  remove(id: string) {
    return `This action removes a #${id} template`;
  }
}
