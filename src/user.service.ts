import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInfo } from './entity/Post.entities';


const to_url_avatar = (code: string) => `https://download.dameng.com/eco-file-server/file/eco/preview/${code}`

const url_eco_login = `https://eco.dameng.com/eco-system-server-biz/weixin/login`


@Injectable()
export class UserService {
  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(UserInfo)
    private usersRepository: Repository<UserInfo>,
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  async login(code: string = "001Xtp0w3gie203YRF0w3IFtAy1Xtp0v"): Promise<any> {
    const res = await this.httpService.axiosRef.post(url_eco_login, { appId: 0, code })
    const { data } = res

    if (data && data.success) {
      const { result } = data || {}

      const token = result.token
      const userInfo = result.userInfo // || {}

      const {
        id,
        nickname,
        account,
        avatar,
        phone,
      } = userInfo

      const user = new UserInfo()

      user.id = id
      user.nickname = nickname
      user.account = account
      user.avatar = to_url_avatar(avatar)
      user.phone = phone
      user.token = token

      const res = await this.usersRepository.findOneBy({ id: user.id })

      if (res) {
        user.create_time = res.create_time
        this.usersRepository.update({ id: user.id }, user)
      } else {
        this.usersRepository.insert(user)
      }

      return data
      
    } else {
      throw new Error(data?.message || '在线服务平台无法连接！')
    }

    // https://download.dameng.com/eco-file-server/file/eco/preview/20220211182526BWYCWE20XAFVLETFT5


  }
}
