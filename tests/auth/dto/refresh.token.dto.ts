import {IsNotEmpty, IsString} from "@nestjs/class-validator";


export class RefreshTokenDto {
    @IsString()
    @IsNotEmpty()
    refresh_token: string;
}