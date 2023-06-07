import { Module } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { FacultiesController } from './faculties.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Faculty, FacultySchema } from './schemas/faculty.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Faculty.name, schema: FacultySchema }]),
  ],
  controllers: [FacultiesController],
  providers: [FacultiesService],
  exports: [FacultiesService],
})
export class FacultiesModule {}
