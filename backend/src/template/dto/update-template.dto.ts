import { PartialType } from '@nestjs/mapped-types';
import { CreateTemplateDTO } from '@meethead/types';

export class UpdateTemplateDTO extends PartialType(CreateTemplateDTO) {}
