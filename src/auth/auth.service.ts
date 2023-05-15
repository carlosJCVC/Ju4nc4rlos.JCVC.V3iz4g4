import { HttpCode, HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { Model } from 'mongoose';
import { Student, StudentDocument } from 'src/students/schemas/student.schema';
import { InjectModel } from '@nestjs/mongoose';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<StudentDocument>,
    private jwtService: JwtService,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async register(studentObject: RegisterAuthDto) {
    const { password } = studentObject;
    const plainToHash = await hash(password, 10);
    studentObject = { ...studentObject, password: plainToHash };
    console.log(plainToHash);
    return this.studentModel.create(studentObject);
  }

  async login(studenObjectLogin: LoginAuthDto) {
    const { email, password } = studenObjectLogin;
    const findStudent = await this.studentModel.findOne({ email });
    console.log(findStudent);
    if (!findStudent) throw new HttpException('USER_NOT_FOUND', 404);

    /* const checkPassword = await compare(password, findStudent.password);

    if (!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403); */

    const payload = { id: findStudent._id, name: findStudent.first_name };
    const token = this.jwtService.sign(payload);

    const data = {
      student: findStudent,
      token,
    };

    return data;
  }
}
