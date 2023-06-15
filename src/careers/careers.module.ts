import { Module } from '@nestjs/common';
import { CareersService } from './careers.service';
import { CareersController } from './careers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FacultiesModule } from 'src/faculties/faculties.module';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterConfigService } from './config/multer-config.service';
import { FeatureConfig } from './config/feature.config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    MongooseModule.forFeatureAsync(FeatureConfig.mongooseOptions()),

    MulterModule.registerAsync({
      imports: [ConfigModule],
      useClass: MulterConfigService,
    }),

    FacultiesModule,
  ],
  controllers: [CareersController],
  providers: [CareersService],
})
export class CareersModule {}
