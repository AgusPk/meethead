import { PartialType } from '@nestjs/mapped-types';
import { CreateTemplateDTO } from '@popr-project/types';

export class UpdateTemplateDTO extends PartialType(CreateTemplateDTO) {}
