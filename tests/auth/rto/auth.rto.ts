import {IsNotEmpty, IsString} from "@nestjs/class-validator";

export class AuthRto{
    @IsString()
    @IsNotEmpty()
    access_token: string;

    @IsString()
    @IsNotEmpty()
    refresh_token: string;

}
