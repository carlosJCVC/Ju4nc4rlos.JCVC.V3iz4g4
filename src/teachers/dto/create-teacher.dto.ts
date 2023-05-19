import { IsNotEmpty, IsString } from 'class-validator';
export class CreateTeacherDto {
  @IsString()
  @IsNotEmpty()
  protected nameDocente: string;
  @IsString()
  @IsNotEmpty()
  protected materia: string;
  @IsString()
  protected carrera: string;
}
