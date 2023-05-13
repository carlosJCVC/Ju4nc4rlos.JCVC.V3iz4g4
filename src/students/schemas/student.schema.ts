import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { type } from 'os';
import { StudentGender } from '../student.enum';

@Schema({
  // TODO review this url please about _id 
  // https://stackoverflow.com/questions/28566841/mongoose-query-remove-id-attribute-keep-virtual-attribute-id-in-results
  toJSON: {
    getters: true,
    virtuals: true,
    versionKey: false,
    // transform: function(doc, ret) {
    //   delete ret._id;
    //   delete ret.__v;
    // }
  },
  timestamps: true
})
export class Student extends Document{
  
  @Prop({ required:true })
  first_name: string;
    
  @Prop({ required:true })
  last_name: string;
  
  @Prop({
    required: true,
    index: true, 
    unique: true
  })
  email: string;

  @Prop({ required:true, enum: StudentGender})
  gender: string;

  @Prop({ type: String })
  cell_phone: string;

  @Prop({ type: String })
  avatar: string;

  @Prop({ required:true, type: String, select: false })
  password: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
