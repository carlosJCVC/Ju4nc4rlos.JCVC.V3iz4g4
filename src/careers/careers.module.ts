import { Module } from '@nestjs/common';
import { CareersService } from './careers.service';
import { CareersController } from './careers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Career, CareerSchema } from './schemas/career.schema';
import { FacultiesModule } from 'src/faculties/faculties.module';
@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: Career.name,
      useFactory(...args) {
        const schema = CareerSchema;
        schema.pre('save', function() {
          const uniqueid = Date.now();
          this.slugName = this.name.toLowerCase().split(" ").join("-") + "-" + uniqueid;
        });

        return schema;
      },
      // schema: CareerSchema
    }]),

    FacultiesModule,
  ],
  controllers: [CareersController],
  providers: [CareersService],
})
export class CareersModule {}
