import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { now, Document } from 'mongoose';
import { Image } from 'src/common/types/types';
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

  @Prop({ type: String })
  slugName: string;

  @Prop({ type: Object, required: true })
  image: Image;
}
export const FacultySchema = SchemaFactory.createForClass(Faculty);
