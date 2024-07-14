import {IsBoolean, IsDateString, IsObject, IsString, IsUUID} from "@nestjs/class-validator";

class NotificationDataRto{
    @IsUUID('4')
    space_id: string

    @IsUUID('4')
    bug_id: string

    @IsString()
    short_name: string

    @IsObject()
    changes: object


}

export class GetNotificationRto{
    @IsDateString()
    create_date: string

    @IsBoolean()
    personal: boolean

    @IsObject()
    data: NotificationDataRto

    @IsBoolean()
    send: boolean

    @IsBoolean()
    read: boolean

    @IsString()
    event: string

    @IsUUID('4')
    user_id: string

    @IsUUID('4')
    id: string

}
