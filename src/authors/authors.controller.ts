import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common'
import { AuthorsService } from './authors.service'
import { CreateAuthorDTO } from './dto/createAuthorDTO'
import { UpdateAuthorDTO } from './dto/updateAuthorDTO'

@Controller({
  version: '1',
  path: 'authors',
})
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  findAll() {
    return this.authorsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.authorsService.findOne(id)
  }

  @Post()
  create(@Body() data: CreateAuthorDTO) {
    return this.authorsService.create(data)
  }

  @Put(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() data: UpdateAuthorDTO) {
    return this.authorsService.update(id, data)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    await this.authorsService.remove(id)
  }
}
