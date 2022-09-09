import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from '@popr/types';

export class UpdateUserDTO extends PartialType(CreateUserDTO) {}
