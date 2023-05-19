import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher, TeacherDocument } from './schemas/teacher.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel(Teacher.name)
    private readonly teacherModel: Model<TeacherDocument>,
  ) {}
  create(createTeacherDto: CreateTeacherDto) {
    return this.teacherModel.create(createTeacherDto);
  }

  findAll() {
    return this.teacherModel.find().exec();
  }

  findOne(id: string) {
    return this.teacherModel.findOne({ _id: id }).exec();
  }

  update(id: string, updateTeacherDto: UpdateTeacherDto) {
    return this.teacherModel.findOneAndUpdate({ _id: id }, updateTeacherDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.teacherModel.findOneAndRemove({ _id: id }).exec();
  }
}
