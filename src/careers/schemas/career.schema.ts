import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { now, Document, Types } from 'mongoose';
import { Faculty } from 'src/faculties/schemas/faculty.schema';
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
  @Prop({ required: true })
  name: string;

  @Prop()
  slugName: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Faculty.name })
  facultad: Faculty;
}

export const CareerSchema = SchemaFactory.createForClass(Career);
