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
  ): Promise<{
    access_token: string;
    user: {
      cpf: string;
      name: string;
      balance: number;
    };
  }> {
    console.log(cpf, password);
    const rawCpf = cpf.replace(/[^\w\s]/gi, '');
    const user = await this.usersService.findOne(rawCpf);

    if (user?.password !== password) {
      throw new UnauthorizedException('CPF ou senha inválidos.');
    }

    const payload = { sub: user.cpf, username: user.cpf };

    const { password: pwd, ...rest } = user;

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: rest,
    };
  }
}
