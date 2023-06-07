import { Module } from '@nestjs/common';
import { CareersService } from './careers.service';
import { CareersController } from './careers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Career, CareerSchema } from './schemas/career.schema';
import { FacultiesModule } from 'src/faculties/faculties.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Career.name, schema: CareerSchema }]),
    FacultiesModule,
  ],
  controllers: [CareersController],
  providers: [CareersService],
})
export class CareersModule {}
