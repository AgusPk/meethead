import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from '@meethead/types';

export class UpdateUserDto extends PartialType(CreateUserDTO) {}
