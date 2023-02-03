import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) { }

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Post('/weichat_login')
  async login(@Body() payload: { code: string, appId: any }) {
    return await this.appService.login(payload.code)
  }

}
 