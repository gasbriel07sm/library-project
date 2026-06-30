import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateBookDTO } from './dto/createBookDTO'
import { UpdateBookDTO } from './dto/updateBookDTO'

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.book.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.book.findFirst({
      where: { id },
    })
  }

  async create(data: CreateBookDTO) {
    return await this.prisma.book.create({
      data,
    })
  }

  async update(id: string, data: UpdateBookDTO) {
    return await this.prisma.book.update({
      where: { id },
      data,
    })
  }

  async remove(id: string) {
    return await this.prisma.book.delete({
      where: { id },
    })
  }
}
