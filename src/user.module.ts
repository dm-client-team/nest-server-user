import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserDataSource } from './user.datasource';
import { HttpModule } from '@nestjs/axios'
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfo } from './entity/Post.entities';

@Module({
  imports: [
    UserDataSource, 
    HttpModule,
    TypeOrmModule.forFeature([UserInfo])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { 
  constructor(private dataSource: DataSource) {}
}
