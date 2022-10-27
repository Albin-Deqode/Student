import { Global, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder,SwaggerModule} from "@nestjs/swagger"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,

  }))
  const options =   new DocumentBuilder()
  .setTitle("Student System")
  .setDescription("Student Rest Api's ")
  .build()
  const document =  SwaggerModule.createDocument(app,options)
  SwaggerModule.setup("api",app,document)
  await app.listen(3000);
}
bootstrap();
