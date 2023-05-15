import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './schemas/student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    try {
      return await this.studentModel.create(createStudentDto);
    } catch (error) {
      this.handleExceptions( error );
    }
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async findOne(id: string): Promise<Student> {
    try {
      return await this.studentModel.findOne({ _id: id }).exec();
    } catch (error) {
      this.handleExceptions( error );
    }
  }

  async update(id: string, updateStudentDto: UpdateStudentDto): Promise<Student> {
    try {
      return await this.studentModel.findOneAndUpdate({ _id: id }, updateStudentDto, {
        // TODO revisar si se debe crear un registro nuevo si no existe el id o registro
        new: true,
      });

    } catch (error) {
      this.handleExceptions( error );
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.studentModel.deleteOne({ _id: id });

    if ( deletedCount === 0 )
      throw new BadRequestException(`Student with id "${ id }" not found`);

    return "removed";
  }

  private handleExceptions( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException(`Email already registered ${ JSON.stringify( error.keyValue ) }`);
    }

    throw new InternalServerErrorException(`Can't create Student - Check server logs`);
  }
}
