import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { now, Document } from 'mongoose';
export type TeacherDocument = Teacher & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
    versionKey: false,
  },
  timestamps: true,
})
export class Teacher extends Document {
  @Prop({ required: true })
  nameDocente: string;
  @Prop()
  materia: string;
  @Prop()
  carrera: string;
}
export const TeacherSchema = SchemaFactory.createForClass(Teacher);
