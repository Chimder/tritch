import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('tritch')
    // .setDescription('The tritch')
    // .setVersion('1.0')
    .addTag('Lol')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  const corsOptions: CorsOptions = {
    origin: true,
    credentials: true,
  };
  app.enableCors(corsOptions);

  SwaggerModule.setup('api', app, document);
  // const port = process.env.PORT ?? 3000;
  await app.listen(4000);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
