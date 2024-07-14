import {IsEmail, IsNotEmpty} from "@nestjs/class-validator";

export class UserDto{
    @IsEmail()
    @IsNotEmpty()
    mail: string;

    @IsNotEmpty()
    password: string;
}
