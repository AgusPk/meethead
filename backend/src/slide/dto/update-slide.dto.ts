import { PartialType } from '@nestjs/mapped-types';
import { CreateSlideDTO } from '@meethead/types';

export class UpdateSlideDTO extends PartialType(CreateSlideDTO) {}
