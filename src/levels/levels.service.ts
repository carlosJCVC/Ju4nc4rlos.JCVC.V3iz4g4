import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { Level, LevelDocument } from './schemas/level.schema';

@Injectable()
export class LevelsService {
  constructor(
    @InjectModel(Level.name)
    private readonly levelModel: Model<LevelDocument>,
  ) {}

  create(createLevelDto: CreateLevelDto) {
    return this.levelModel.create(createLevelDto);
  }

  findAll() {
    return this.levelModel.find().exec();
  }

  findOne(id: string) {
    return this.levelModel.findOne({ _id: id }).exec();
  }

  update(id: string, updateLevelDto: UpdateLevelDto) {
    return this.levelModel.findOneAndUpdate({ _id: id }, updateLevelDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.levelModel.findByIdAndRemove({ _id: id }).exec();
  }
}
