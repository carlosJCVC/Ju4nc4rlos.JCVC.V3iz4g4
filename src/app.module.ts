import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './auth/auth.module';
import { CareersModule } from './careers/careers.module';
import { FacultiesModule } from './faculties/faculties.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TeachersModule } from './teachers/teachers.module';
/* import { DriveModule } from './drive/drive.module'; */
import { join } from 'path';
import { FilesModule } from './files/files.module';
import { LevelsModule } from './levels/levels.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_HOST),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'), 
    }),

    StudentsModule,
    AuthModule,
    CareersModule,
    FacultiesModule,
    SubjectsModule,
    TeachersModule,
    FilesModule,
    /* DriveModule, */
    LevelsModule,
    SeedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

