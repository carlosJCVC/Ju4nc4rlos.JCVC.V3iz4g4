import { IsEmail, IsEmpty, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { StudentGender } from '../student.enum';

export class CreateStudentDto {

    @IsString()
    @IsNotEmpty()
    protected first_name: string;

    @IsString()
    @IsNotEmpty()
    protected last_name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    protected email: string;

    @IsEnum(StudentGender)
    protected gender: string;

    @IsString()
    @IsOptional()
    protected cell_phone: string;

    // @IsString()
    @IsOptional()
    protected avatar: string;

    @IsString()
    @IsNotEmpty()
    protected password: string;

    @IsString()
    @IsNotEmpty()
    protected password_confirm: string;
}
