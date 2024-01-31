import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  // POSSIBLE INCREMENT: Encrypt password
  async signIn(cpf: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(cpf);
    if (user?.password !== password) {
      throw new UnauthorizedException('Invalid Username or password');
    }

    const { password: pass, ...result } = user;

    return result;
  }
}
