import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { FacultiesModule } from '../faculties/faculties.module';
import { CareersModule } from '../careers/careers.module';
import { SubjectsModule } from '../subjects/subjects.module';

@Module({
  imports: [
    FacultiesModule,
    CareersModule,
    SubjectsModule,
  ],
  controllers: [SeedController],
  providers: [SeedService]
})
export class SeedModule {}
