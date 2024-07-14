import {Request} from "../../src/common/request";
import {UserService} from "./service/user.service";
import {UserDto} from "../auth/dto/user.dto";
import * as process from "node:process";


describe('User module', ()=>{
    const req: Request = new Request()
    const userService = new UserService(req);
    beforeAll(async ()=>{
        await req.authUser(<UserDto>{
            mail: process.env.USER_MAIL,
            password: process.env.USER_PASSWORD
        })
    })

    test('get profile', async ()=>{
        await userService.getProfile()
    })
    test('get notification', async ()=>{
        await userService.getNotification()
    })
})