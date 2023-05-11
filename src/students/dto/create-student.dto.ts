import { IsNotEmpty, IsString } from "class-validator";

export class CreateStudentDto {

    @IsString()
    @IsNotEmpty()
    protected first_name: string;
    @IsString()
    @IsNotEmpty()
    protected last_name: string;
    @IsString()
    @IsNotEmpty()
    protected email: string;
    @IsNotEmpty()
    protected gender: string;
    @IsString()
    protected cell_phone: string;
    @IsString()
    protected avatar: string;
    @IsString()
    @IsNotEmpty()
    protected password: string;
}
