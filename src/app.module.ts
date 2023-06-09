import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CareersModule } from './careers/careers.module';
import { FacultiesModule } from './faculties/faculties.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TeachersModule } from './teachers/teachers.module';
import { DriveModule } from './drive/drive.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_HOST),
    StudentsModule,
    AuthModule,
    CareersModule,
    FacultiesModule,
    SubjectsModule,
    TeachersModule,
    DriveModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

