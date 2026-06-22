import { ValidationPipe, VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableVersioning({ type: VersioningType.URI })
  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle('Library Project')
    .setDescription('Description of API')
    .setVersion('1')
    .build()

  const document = () => SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
