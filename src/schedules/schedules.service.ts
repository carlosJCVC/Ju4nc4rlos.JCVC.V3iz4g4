import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CareersService } from 'src/careers/careers.service';
import { SubjectsService } from 'src/subjects/subjects.service';
import { TeachersService } from 'src/teachers/teachers.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { CareerNotFoundException } from './exceptions/career-not-found.exception';
import { Schedule, ScheduleDocument } from './schemas/schedule.schema';

@Injectable()
export class SchedulesService {
  CareersService: any;
  TeachersService: any;
  SujectsService: any;

  constructor(
    @InjectModel(Schedule.name)
    private readonly scheduleModel: Model<ScheduleDocument>,
    private careersService: CareersService,
    private teachersService: TeachersService,
    private subjectsService: SubjectsService,
  ) {}

  async create(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
    try {
      const career = await this.careersService.findOne(
        createScheduleDto.career,
      );
      const subject = await this.subjectsService.findOne(
        createScheduleDto.subject,
      );
      const teacher = await this.teachersService.findOne(
        createScheduleDto.teacher,
      );
      if (career == null || subject == null || teacher == null) {
        throw new HttpException('un campo no existe', HttpStatus.BAD_REQUEST);
      }

      return this.scheduleModel.create(createScheduleDto);
    } catch (error) {
      if (error.status == 400) {
        throw new CareerNotFoundException();
      }
      throw new InternalServerErrorException();
    }
  }

  findAll() {
    return this.scheduleModel.find().exec();
  }

  findOne(id: string) {
    return this.scheduleModel.findOne({ _id: id }).exec();
  }

  update(id: string, updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleModel.findByIdAndUpdate(
      { _id: id },
      updateScheduleDto,
      { new: true },
    );
  }

  remove(id: string) {
    return this.scheduleModel.findByIdAndRemove({ _id: id }).exec();
  }
}
