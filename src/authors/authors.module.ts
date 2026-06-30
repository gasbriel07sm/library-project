import { Module } from '@nestjs/common'
import { PrismaModule } from '../prisma/prisma.module'
import { PrismaService } from '../prisma/prisma.service'
import { AuthorsController } from './authors.controller'
import { AuthorsService } from './authors.service'

@Module({
  imports: [PrismaModule],
  controllers: [AuthorsController],
  providers: [AuthorsService, PrismaService],
})
export class AuthorsModule {}
