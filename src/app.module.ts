import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    // TODO utilizar enviroments para los valores en duro
    MongooseModule.forRoot('mongodb://localhost:27017/backend'),
    StudentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
