import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray } from 'class-validator';
export class CreateCareerDto {
  @ApiProperty({
    example: 'Sistemas',
  })
  @IsString()
  @IsNotEmpty()
  protected name: string;
  @ApiProperty({
    example: 'Sistemas_123',
  })
  @IsString()
  @IsNotEmpty()
  protected slugName: string;
  @ApiProperty({
    example: '6461a1a22457ed4bc84e28f2',
  })
  @IsNotEmpty()
  readonly facultad: string;
}
