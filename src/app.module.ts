import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', }),
    MongooseModule.forRoot(process.env.MONGODB_HOST),
    StudentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

