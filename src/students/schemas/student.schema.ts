import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop()
  first_name: string;
  @Prop()
  last_name: string;
  @Prop()
  email: string;
  @Prop()
  gender: string;
  @Prop()
  cell_phone: string;
  @Prop()
  avatar: string;
  @Prop()
  password: string;
}
export const StudentSchema = SchemaFactory.createForClass(Student);
