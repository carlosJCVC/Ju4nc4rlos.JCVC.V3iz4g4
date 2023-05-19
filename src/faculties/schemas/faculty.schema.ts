import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { now, Document } from 'mongoose';
export type FacultyDocument = Faculty & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
    versionKey: false,
  },
  timestamps: true,
})
export class Faculty extends Document {
  @Prop({ required: true })
  name: string;
  @Prop()
  slugName: string;
}
export const FacultySchema = SchemaFactory.createForClass(Faculty);
