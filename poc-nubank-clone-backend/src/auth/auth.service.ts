import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // POSSIBLE INCREMENT: Encrypt password
  // POSSIBLE INCREMENT: Create refresh token
  async signIn(
    cpf: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(cpf);

    if (user?.password !== password) {
      throw new UnauthorizedException('Invalid Username or password');
    }

    const payload = { sub: user.cpf, username: user.cpf };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
