import { Injectable, BadRequestException, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService
  ) {}

  async register(createUserDto: CreateUserDto): Promise<{}> {

    const saltOrRounds = 10;
    const { password } = createUserDto;
    const hash = await bcrypt.hash(password, saltOrRounds);    
    createUserDto.password = hash;

    try {
      const user = await this.userModel.create(createUserDto);

      return {
        email: user.email,
        password: user.password,
        token: this.getJwtToken({id: user.id})
      };
    } catch (error) {
      this.handleExceptions( error );
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const {email, password} = loginUserDto;
    const user = await this.userModel.findOne({email}).select({email: true, firstName: true, lastName: true, gender: true, password: true});

    if (!user) {
      throw new UnauthorizedException('Credentials are not valid (Email)');
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException('Credentials are not valid (Password)');
    }

    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      token: this.getJwtToken({id: user.id})
    };
  }

  private getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);

    return token;
  }

  private handleExceptions( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException(`Email already registered ${ JSON.stringify( error.keyValue ) }`);
    }

    throw new InternalServerErrorException(`Can't register User - Check server logs`);
  }
}
