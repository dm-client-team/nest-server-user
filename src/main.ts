import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import 'reflect-metadata'

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.setGlobalPrefix('/api/user')
  await app.listen(3000);
}
bootstrap();
