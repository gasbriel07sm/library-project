import { Injectable, NotFoundException } from '@nestjs/common'
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
    const book = await this.prisma.book.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            bio: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    })

    if (!book) throw new NotFoundException('Book not exist')

    return book
  }

  async create(data: CreateBookDTO) {
    return await this.prisma.book.create({
      data,
    })
  }

  async update(id: string, data: UpdateBookDTO) {
    await this.findOne(id)

    return await this.prisma.book.update({
      where: { id },
      data,
    })
  }

  async remove(id: string) {
    await this.findOne(id)

    await this.prisma.book.delete({
      where: { id },
    })
  }
}
