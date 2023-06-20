import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SubjectType } from '../subjectType.enum';
import { Schedule } from '../../common/types/schedule.type';
export type SubjectDocument = Subject & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
    versionKey: false,
  },
  timestamps: true,
})
export class Subject extends Document {
  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: SubjectType })
  type: string;

  @Prop({ required: true, default: false })
  isElective: boolean;
}
export const SubjectSchema = SchemaFactory.createForClass(Subject);
