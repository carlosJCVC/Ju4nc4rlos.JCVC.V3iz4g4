import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';
import { Document } from 'mongoose';
import { type } from 'os';
import { StudentGender } from '../student.enum';
export type StudentDocument = Student & Document;
@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
    versionKey: false,
  },
  timestamps: true,
})
export class Student  {
  @Prop({ required:true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({
    required: true,
    index: true,
    unique: true,
  })
  email: string;

  @Prop({ required: true, enum: StudentGender })
  gender: string;

  @Prop({ type: String })
  cell_phone: string;

  @Prop({ type: String })
  avatar: string;

  @Exclude()
  @Prop({ required:true, type: String, select: false })
  password: string;

  @Expose()
  get fullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }
}

export const StudentSchema = SchemaFactory.createForClass(Student);
