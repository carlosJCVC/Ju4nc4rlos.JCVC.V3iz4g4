import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { FacultyModule } from './faculty/faculty.module';
@Module({
  imports: [
    // TODO utilizar enviroments para los valores en duro
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_HOST),
    StudentsModule,
    FacultyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
