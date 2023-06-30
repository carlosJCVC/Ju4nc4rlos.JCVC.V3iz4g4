import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateScheduleDto {
  @IsMongoId({ message: 'La carrera ingresada no existe.' })
  @IsNotEmpty()
  readonly career: string;

  @IsMongoId({ message: 'La materia ingresada no existe.' })
  @IsNotEmpty()
  readonly subject: string;

  @IsMongoId({ message: 'El docente no existe.' })
  @IsNotEmpty()
  readonly teacher: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo no puede estar vacio' })
  protected startTime: string;
  @IsString()
  @IsNotEmpty({ message: 'Este campo no puede estar vacio' })
  protected endTime: string;
  @IsString()
  @IsNotEmpty({ message: 'Este campo no puede estar vacio' })
  protected classroom: string;
  @IsString()
  @IsNotEmpty({ message: 'Este campo no puede estar vacio' })
  protected group: string;
  @IsString()
  @IsNotEmpty({ message: 'Este campo no puede estar vacio' })
  protected day: string;

  public get getCarrerId() {
    return this.career;
  }
  public get getSubjectId() {
    return this.subject;
  }
  public get getTeacherId() {
    return this.teacher;
  }
}
