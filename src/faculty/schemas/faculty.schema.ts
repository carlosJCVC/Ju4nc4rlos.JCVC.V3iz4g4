import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { now, Document } from 'mongoose';
export type FacultyDocument = Faculty & Document;

@Schema()
export class Faculty extends Document{
  @Prop({required:true})
  name: string;
  @Prop()
  slug_name: string;
  @Prop({default: now()})
  createdAt: Date;
  @Prop({default: now()})
  updatedAt: Date;
}
export const FacultySchema = SchemaFactory.createForClass(Faculty);
