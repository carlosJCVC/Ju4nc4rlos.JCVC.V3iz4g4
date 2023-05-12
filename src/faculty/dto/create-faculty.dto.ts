import { IsNotEmpty, IsString } from "class-validator";
export class CreateFacultyDto {
    @IsString()
    @IsNotEmpty()
    protected name: string;
    @IsString()
    @IsNotEmpty()
    protected slug_name: string;
}
