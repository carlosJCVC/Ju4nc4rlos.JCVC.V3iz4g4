import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLevelDto {
  @IsString()
  @IsNotEmpty({ message: 'Este campo no puede estar vacio' })
  protected name: string;
}
