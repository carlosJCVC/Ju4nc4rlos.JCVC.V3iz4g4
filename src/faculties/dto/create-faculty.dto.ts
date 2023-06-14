import { IsNotEmpty, IsString } from 'class-validator';
import { Image } from 'src/common/types/types';

export class CreateFacultyDto {
  @IsString()
  @IsNotEmpty()
  protected name: string;

  public image: Image;
}
