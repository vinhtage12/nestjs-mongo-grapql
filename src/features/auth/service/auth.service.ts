import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../../users/service/users.service';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { UserDocument } from '../../users/schema/user.schema';
import { JwtPayload } from '../strategies/jwt.strategy';

const BCRYPT_ROUNDS = 12;

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserDocument | null> {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch ? user : null;
  }

  async login(user: UserDocument): Promise<{ accessToken: string }> {
    const payload: JwtPayload = { sub: (user._id as unknown as string).toString(), email: user.email };
    return { accessToken: this.jwtService.sign(payload) };
  }

  async register(dto: CreateUserDto): Promise<{ accessToken: string }> {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) {
      throw new ConflictException('Email is already in use');
    }

    const hashed = await bcrypt.hash(dto.password, BCRYPT_ROUNDS);
    const user = await this.usersService.create({ ...dto, password: hashed });
    return this.login(user);
  }
}
