import { PartialType } from '@nestjs/mapped-types';
import { CreateSlideDTO } from '@popr-project/types';

export class UpdateSlideDTO extends PartialType(CreateSlideDTO) {}
