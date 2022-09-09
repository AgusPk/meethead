import { Injectable } from '@nestjs/common';
import { CreateSlideDTO } from '@popr/types';
import { UpdateSlideDTO } from './dto/update-slide.dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  Template,
  TemplateDocument,
} from 'src/template/schemas/template.schema';
import { Model } from 'mongoose';

@Injectable()
export class SlideService {
  constructor(
    @InjectModel(Template.name)
    private templateModel: Model<TemplateDocument>,
  ) {}

  async addSlides(
    templateId: string,
    slides: CreateSlideDTO[],
  ): Promise<Template> {
    try {
      return await this.templateModel.findByIdAndUpdate(templateId, {
        $push: {
          slides: slides,
        },
      });
    } catch (error) {
      throw new Error('Error adding slides on template');
    }
  }

  findAll() {
    return `This action returns all slide`;
  }

  findOne(id: string) {
    return `This action returns a #${id} slide`;
  }

  update(id: string, updateSlideDTO: UpdateSlideDTO) {
    return `This action updates a #${id} slide`;
  }

  remove(id: string) {
    return `This action removes a #${id} slide`;
  }
}
