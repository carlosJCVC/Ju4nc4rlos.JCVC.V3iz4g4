import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { Career, CareerDocument } from './schemas/career.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FilterCareersDto } from './dto/pagination-career.dto';
import { FacultiesService } from './../faculties/faculties.service';
import { FacultyNotFoundException } from './exceptions/faculty-not-found.exception';
@Injectable()
export class CareersService {
  FacultiesService: any;

  constructor(
    @InjectModel(Career.name)
    private readonly careerModel: Model<CareerDocument>,
    private facultiesService: FacultiesService,
  ) {}

  async create(createCareerDto: CreateCareerDto): Promise<Career> {
    try {
      const faculty = await this.facultiesService.findOne(createCareerDto.getFacultyId);

      if (faculty == null) {
        throw new HttpException('La facultad ingresada no existe.', HttpStatus.BAD_REQUEST);
      }

      return this.careerModel.create(createCareerDto);
    } catch (error) {
      if (error.status == 400) {
        throw new FacultyNotFoundException();
      }

      throw new InternalServerErrorException();
    }
  }

  async createFromSeeder(data): Promise<Career> {
    try {
      const faculty = await this.facultiesService.findOne(data.faculty);

      if (faculty == null) {
        throw new HttpException('La facultad ingresada no existe.', HttpStatus.BAD_REQUEST);
      }

      return this.careerModel.create(data);
    } catch (error) {
      if (error.status == 400) {
        throw new FacultyNotFoundException();
      }

      throw new InternalServerErrorException();
    }
  }

  async findAll(params: FilterCareersDto = {}): Promise<Career[]> {
    const { limit, offset } = params;
    return this.careerModel
      .find()
      .populate('faculty')
      .skip(offset)
      .limit(limit)
      .exec();
  }

  async findOne(id: string): Promise<Career> {
    return this.careerModel.findOne({ _id: id }).exec();
  }

  async findOneByCode(code: string): Promise<Career> {
    return this.careerModel.findOne({ code: code }).exec();
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
