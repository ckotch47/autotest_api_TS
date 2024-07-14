import {IsEmail, IsObject, IsOptional, IsString, IsUUID} from "@nestjs/class-validator";

export class AvatarRto{
    @IsUUID()
    id: string

    @IsString()
    filepath: string
}

export class ProfileRto{
    @IsUUID('4')
    id: string

    @IsString()
    @IsOptional()
    username?: string | undefined

    @IsEmail()
    mail: string

    @IsUUID('4')
    avatar_id: string

    @IsObject()
    @IsOptional()
    avatar: AvatarRto
}
