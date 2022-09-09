import { PartialType } from '@nestjs/mapped-types';
import { CreateSlideDTO } from '@popr/types';

export class UpdateSlideDTO extends PartialType(CreateSlideDTO) {}
