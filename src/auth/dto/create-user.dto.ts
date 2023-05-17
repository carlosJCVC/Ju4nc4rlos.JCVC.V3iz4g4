import { Expose, Transform } from "class-transformer";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Match } from "src/students/decorators/match.decorator";
import { UserGender } from '../interfaces/user-gender.enum';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    protected firstName: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    protected lastName: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    protected email: string;

    @IsEnum(UserGender)
    protected gender: string;

    @IsString()
    @IsOptional()
    protected cellPhone: string;

    // @Isstring()
    @IsOptional()
    protected avatar: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    public password: string;

    @IsString()
    @Expose()
    @IsNotEmpty()
    @Match('password')
    protected passwordConfirm: string;

    set setPassword(password: string) {
        this.password = password;
    }

    get getPassword(): string {
        return this.password;
    }
}
