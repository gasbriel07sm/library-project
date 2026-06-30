import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/createBookDTO';
import { UpdateBookDTO } from './dto/updateBookDTO';

@Controller({
  version: '1',
  path: 'books'
})
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() {
    return this.booksService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.booksService.findOne(id)
  }

  @Post()
  create(@Body() data: CreateBookDTO) {
    return this.booksService.create(data)
  }

  @Put(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() data: UpdateBookDTO) {
    return this.booksService.update(id, data)
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.booksService.remove(id)
  }
}
