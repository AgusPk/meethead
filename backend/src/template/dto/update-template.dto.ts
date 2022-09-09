import { PartialType } from '@nestjs/mapped-types';
import { CreateTemplateDTO } from '@popr/types';

export class UpdateTemplateDTO extends PartialType(CreateTemplateDTO) {}
