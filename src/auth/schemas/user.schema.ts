import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Expose } from 'class-transformer';

@Schema({
    toJSON: {
      getters: true,
      virtuals: true,
      versionKey: false,
    },
    timestamps: true
})
export class User {
  @Prop({ required:true })    
  firstName: string;

  @Prop({ required:true })    
  lastName: string;

  @Prop({
    required: true,
    index: true, 
    unique: true
  })    
  email: string;

  @Exclude()
  // @Transform(({ value }) => console.log('value', value))
  @Prop({ required:true, type: String, select: false })
  password: string;

  @Prop({ type: Boolean, default: true })
  isActive: string;

  @Prop({ type: Array, default: ['user'] })
  roles: string[];

  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
};

export const UserSchema = SchemaFactory.createForClass(User);
