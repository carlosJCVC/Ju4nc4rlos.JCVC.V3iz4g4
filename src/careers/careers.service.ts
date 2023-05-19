import { Injectable } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { Career, CareerDocument } from './schemas/career.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CareersService {
  constructor(
    @InjectModel(Career.name)
    private readonly careerModel: Model<CareerDocument>,
  ) {}
  async create(createCareerDto: CreateCareerDto): Promise<Career> {
    return this.careerModel.create(createCareerDto);
  }

  async findAll(): Promise<Career[]> {
    return this.careerModel.find().populate('facultad').exec();
  }

  async findOne(id: string): Promise<Career> {
    return this.careerModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateCareerDto: UpdateCareerDto): Promise<Career> {
    return this.careerModel.findOneAndUpdate({ _id: id }, updateCareerDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.careerModel.findOneAndRemove({ _id: id }).exec();
  }
}
