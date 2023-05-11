import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { now,Document } from 'mongoose';
export type StudentDocument = Student & Document;
@Schema()
export class Student extends Document{
  @Prop({ required:true})
  first_name: string;
  @Prop({ required:true})
  last_name: string;
  @Prop({ required:true})
  email: string;
  @Prop({ required:true})
  gender: string;
  @Prop({ required:true})
  cell_phone: string;
  @Prop({ required:true})
  avatar: string;
  @Prop({ required:true})
  password: string;
  @Prop({default: now()})
  createdAt: Date;
  @Prop({default: now()})
  updatedAt: Date;
}
export const StudentSchema = SchemaFactory.createForClass(Student);
