import { Module } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { FacultiesController } from './faculties.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FeatureConfig } from './config/feature.config';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config';
import { MulterConfigService } from './config/multer.config.service';
import { Career } from '../careers/schemas/career.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync(FeatureConfig.mongooseOptions()),

    MulterModule.registerAsync({
      imports: [ConfigModule],
      useClass: MulterConfigService,
    }),
  ],
  controllers: [FacultiesController],
  providers: [FacultiesService],
  exports: [FacultiesService],
})
export class FacultiesModule {}
