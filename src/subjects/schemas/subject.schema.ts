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
  @Prop()
  code: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  level: string;

  @Prop({ type: Object })
  schedule: Schedule;

  @Prop({ required: true, enum: SubjectType })
  type: string;

}
export const SubjectSchema = SchemaFactory.createForClass(Subject);
