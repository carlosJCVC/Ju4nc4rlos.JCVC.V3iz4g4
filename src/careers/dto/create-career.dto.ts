import { IsNotEmpty, IsString, IsArray } from 'class-validator';
export class CreateCareerDto {
  @IsString()
  @IsNotEmpty()
  protected name: string;
  @IsString()
  @IsNotEmpty()
  protected slugName: string;
  @IsNotEmpty()
  readonly facultad: string;
}
