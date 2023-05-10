import { IsNotEmpty, IsString } from "class-validator";

export class CreateStudentDto {

    @IsString()
    @IsNotEmpty()
    protected first_name: string;
}
