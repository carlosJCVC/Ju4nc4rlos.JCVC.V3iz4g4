import { IsEmail, IsEmpty, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Match } from "../decorators/match.decorator";
import { StudentGender } from '../student.enum';

export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    protected firstName: string;

    @IsString()
    @IsNotEmpty()
    protected lastName: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    protected email: string;

    @IsEnum(StudentGender)
    protected gender: string;

    @IsString()
    @IsOptional()
    protected cellPhone: string;

    // @IsString()
    @IsOptional()
    protected avatar: string;

    @IsString()
    @IsNotEmpty()
    protected password: string;

    @IsString()
    @IsNotEmpty()
    @Match('password')
    protected passwordConfirm: string;
}
