import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './schemas/student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<StudentDocument>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentModel.create(createStudentDto);
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async findOne(id: string): Promise<Student> {
    return this.studentModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    return this.studentModel.findOneAndUpdate({ _id: id }, updateStudentDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.studentModel.findOneAndRemove({ _id: id }).exec();
  }
}
