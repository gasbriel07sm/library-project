import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { PrismaService } from '../prisma/prisma.service'
import { BooksController } from './books.controller'
import { BooksService } from './books.service'

@Module({
  imports: [PrismaModule],
  controllers: [BooksController],
  providers: [BooksService, PrismaService],
})
export class BooksModule {}
