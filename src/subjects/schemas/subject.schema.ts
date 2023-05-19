import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
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
  nameMateria: string;
}
export const SubjectSchema = SchemaFactory.createForClass(Subject);
