import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuthorDTO } from './dto/createAuthorDTO';
import { UpdateAuthorDTO } from './dto/updateAuthorDTO';

@Injectable()
export class AuthorsService {
  constructor(private readonly prisma: PrismaService) {}
  
    async findAll() {
      return await this.prisma.author.findMany()
    }
  
    async findOne(id: string) {
      return await this.prisma.author.findFirst({
        where: { id },
      })
    }
  
    async create(data: CreateAuthorDTO) {
      return await this.prisma.author.create({
        data,
      })
    }
  
    async update(id: string, data: UpdateAuthorDTO) {
      return await this.prisma.author.update({
        where: { id },
        data,
      })
    }
  
    async remove(id: string) {
      return await this.prisma.author.delete({
        where: { id },
      })
    }
}
