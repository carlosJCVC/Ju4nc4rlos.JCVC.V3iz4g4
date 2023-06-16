import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LevelDocument = Level & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
    versionKey: false,
  },
  timestamps: true,
})
export class Level extends Document {
  @Prop({ required: true })
  name: string;
}
export const LevelSchema = SchemaFactory.createForClass(Level);
