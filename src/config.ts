import { MongooseModule } from '@nestjs/mongoose';

export default () => ({
  port: MongooseModule.forRoot(process.env.MONGODB_HOST),
});
