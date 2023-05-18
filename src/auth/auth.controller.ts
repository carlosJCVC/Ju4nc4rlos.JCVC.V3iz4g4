import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUser } from './decorators/get-user.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './schemas/user.schema';
import { ValidRoles } from './interfaces/valid-roles';
import { Auth } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  // @Get('user')
  // @RoleProtected( ValidRoles.superUser, ValidRoles.admin )
  // @UseGuards(AuthGuard(), UserRoleGuard)
  // getUser(@GetUser() user: User) {
  //   return {
  //     status: true,
  //     user
  //   };
  // }

  @Get('user')
  @Auth( ValidRoles.superUser )
  getUserBetter(@GetUser() user: User) {
    return {
      status: true,
      user
    };
  }
}
