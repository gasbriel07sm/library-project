import { IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class CreateBookDTO {

  @IsString()
  @IsNotEmpty()
  title!: string

  @IsString()
  @IsNotEmpty()
  isbn!: string

  @IsUUID()
  @IsNotEmpty()
  authorId!: string
}