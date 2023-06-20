import { IsEnum, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { Schedule } from 'src/common/types/types';
import { SubjectType } from '../subjectType.enum';
export class CreateSubjectDto {
  @IsString()
  @IsNotEmpty()
  protected code: string;

  @IsString()
  @IsNotEmpty()
  protected name: string;

  @IsEnum(SubjectType)
  protected type: string;
}
