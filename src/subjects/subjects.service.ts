import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject, SubjectDocument } from './schemas/subject.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectModel(Subject.name)
    private readonly subjectModel: Model<SubjectDocument>,
  ) {}

  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return this.subjectModel.create(createSubjectDto);
  }

  async createFromSeeder(data): Promise<Subject> {
    return this.subjectModel.create(data);
  }

  findAll() {
    return this.subjectModel.find().exec();
  }

  findOne(id: string) {
    return this.subjectModel.findOne({ _id: id }).exec();
  }

  findOneByCode(code: string) {
    return this.subjectModel.findOne({ code: code }).exec();
  }

  update(id: string, updateSubjectDto: UpdateSubjectDto): Promise<Subject> {
    return this.subjectModel.findOneAndUpdate({ _id: id }, updateSubjectDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.subjectModel.findOneAndRemove({ _id: id }).exec();
  }
}
