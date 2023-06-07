import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsMongoId } from 'class-validator';
export class CreateCareerDto {
  @ApiProperty({
    example: 'Sistemas',
    description: 'ingrese el nombre de una carrera en cadenas',
  })
  @IsString()
  @IsNotEmpty({ message: 'Ingrese un nombre' })
  protected name: string;

  @ApiProperty({
    example: 'Sistemas_123',
    description: 'El slug se crea por defecto',
  })
  @IsString()
  @IsNotEmpty()
  protected slugName: string;

  @ApiProperty({
    example: '6461a1a22457ed4bc84e28f2',
    description: 'se tiene que ingresar un ID de una facultad registrada',
  })
  @IsMongoId({ message: 'El formato del ID ingresado no es valido' })
  @IsNotEmpty()
  readonly facultad: string;
}
