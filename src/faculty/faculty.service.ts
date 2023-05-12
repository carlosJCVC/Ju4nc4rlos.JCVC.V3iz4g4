import { Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Faculty, FacultyDocument } from './schemas/faculty.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FacultyService {
  constructor(
    @InjectModel(Faculty.name)
    private readonly facultyModel: Model<FacultyDocument>,
  ) {}

  async create(createFacultyDto: CreateFacultyDto): Promise<Faculty> {
    return this.facultyModel.create(createFacultyDto);
  }

  async findAll(): Promise<Faculty[]> {
    return this.facultyModel.find().exec();
  }

  async findOne(id: string): Promise<Faculty> {
    return this.facultyModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateFacultyDto: UpdateFacultyDto,
  ): Promise<Faculty> {
    return this.facultyModel.findOneAndUpdate({ _id: id }, updateFacultyDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.facultyModel.findOneAndRemove({ _id: id }).exec();
  }
}
