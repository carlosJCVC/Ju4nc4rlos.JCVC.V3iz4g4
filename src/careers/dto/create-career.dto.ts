import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsMongoId } from 'class-validator';
import { Image } from 'src/common/types/types';

export class CreateCareerDto {
  @IsString()
  @IsNotEmpty()
  protected code: string;

  @ApiProperty({ example: 'Sistemas', description: 'Nombre de la carrera es requrido.' })
  @IsString()
  @IsNotEmpty({ message: 'Nombre de la carrera es requerido.' })
  protected name: string;

  @ApiProperty({ example: '6461a1a22457ed4bc84e28f2', description: 'Para registrar un carrera es requerida una facultad existente.' })
  @IsMongoId({ message: 'La facultad ingresada no existe.' })
  @IsNotEmpty()
  protected faculty: string;

  public image: Image;

  @IsString()
  @IsNotEmpty()
  protected type: string;

  public get getFacultyId() {
    return this.faculty;
  }
}
