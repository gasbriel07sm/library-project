import { PartialType } from '@nestjs/swagger';
import { CreateBookDTO } from './createBookDTO';

export class UpdateBookDTO extends PartialType(CreateBookDTO) {}