import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';
import { Career } from 'src/careers/schemas/career.schema';
import { Subject } from 'src/subjects/schemas/subject.schema';
import { Teacher } from 'src/teachers/schemas/teacher.schema';

export type ScheduleDocument = Schedule & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
    versionKey: false,
  },
  timestamps: true,
})
export class Schedule {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Career.name })
  @Type(() => Career)
  career: Career;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Subject.name })
  @Type(() => Subject)
  subject: Subject;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Teacher.name })
  @Type(() => Teacher)
  teacher: Teacher;
  @Prop({ type: String })
  startTime: string;
  @Prop({ type: String })
  endTime: string;
  @Prop({ type: String })
  classroom: string;
  @Prop({ type: String })
  group: string;
  @Prop({ type: String })
  day: string;
}
export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
