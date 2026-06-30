import { PartialType } from '@nestjs/swagger';
import { CreateAuthorDTO } from './createAuthorDTO';

export class UpdateAuthorDTO extends PartialType(CreateAuthorDTO) {}