import { Injectable, NotFoundException } from '@nestjs/common';
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
      const author = await this.prisma.author.findUnique({
        where: { id },
      })

      if (!author) throw new NotFoundException('Author not exist')
      
      return author 
    }
  
    async create(data: CreateAuthorDTO) {
      return await this.prisma.author.create({
        data,
      })
    }
  
    async update(id: string, data: UpdateAuthorDTO) {
      await this.findOne(id)

      return await this.prisma.author.update({
        where: { id },
        data,
      })
    }
  
    async remove(id: string) {
      await this.findOne(id)

      await this.prisma.author.delete({
        where: { id },
      })
    }
}
