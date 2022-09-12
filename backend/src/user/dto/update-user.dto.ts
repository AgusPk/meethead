import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from '@popr-project/types';

export class UpdateUserDTO extends PartialType(CreateUserDTO) {}
