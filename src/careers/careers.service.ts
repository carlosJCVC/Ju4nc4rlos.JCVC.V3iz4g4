import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { Career, CareerDocument } from './schemas/career.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FilterCareersDto } from './dto/pagination-career.dto';
import { FacultiesService } from './../faculties/faculties.service';
@Injectable()
export class CareersService {
  FacultiesService: any;
  constructor(
    @InjectModel(Career.name)
    private readonly careerModel: Model<CareerDocument>,
    private facultiesService: FacultiesService,
  ) {}
  async create(createCareerDto: CreateCareerDto): Promise<Career> {
    const facul = await this.facultiesService.findOne(createCareerDto.facultad);
    if (facul == null) {
      throw new BadRequestException('La facultad no existe');
    } 
    return this.careerModel.create(createCareerDto);
  }

  async findAll(params: FilterCareersDto): Promise<Career[]> {
    const { limit, offset } = params;
    return this.careerModel
      .find()
      .populate('facultad')
      .skip(offset)
      .limit(limit)
      .exec();
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
