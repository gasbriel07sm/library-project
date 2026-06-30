import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateAuthorDTO {
 
  @IsString()
  @IsNotEmpty()
  name!: string

  @IsString()
  @IsOptional()
  bio?: string 
}