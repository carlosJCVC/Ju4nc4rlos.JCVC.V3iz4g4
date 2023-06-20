import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { now, Document, Types } from 'mongoose';
import { Faculty } from 'src/faculties/schemas/faculty.schema';
import { Image } from 'src/common/types/image.type';
import { Type } from 'class-transformer';

export type CareerDocument = Career & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
    versionKey: false,
  },
  timestamps: true,
})
export class Career extends Document {
  @Prop({ type: String })
  code: string;

  @Prop({ required: true })
  name: string;

  // TODO required true does not working with pre save here
  @Prop({ type: String })
  slugName: string;

  @Prop({ type: String })
  type: string;

  @Prop({ type: Object })
  image: Image;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Faculty.name })
  @Type(() => Faculty)
  faculty: Faculty;
}

export const CareerSchema = SchemaFactory.createForClass(Career);
