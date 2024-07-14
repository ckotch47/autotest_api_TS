import {BaseService} from "../../../src/common/base.service";
import {bodyExpect} from "../../../src/common/base.expection";
import {ProfileRto} from "../rto/profile.rto";
import {Response} from "supertest";
import {GetNotificationRto} from "../rto/get.notification.rto";


export class UserService extends BaseService{
    public async getProfile(): Promise<Response>{
        const res = await this.request.get('/v1/user');
        expect(res.status).toBe(200);
        bodyExpect(ProfileRto, res.body)
        return res;
    }

    public async getNotification(): Promise<Response>{
        const res = await this.request.get('/v1/notification', {
            query: {
                limit: 10,
                skip: 0
            }
        })
        expect(res.status).toBe(200)
        bodyExpect(GetNotificationRto, res.body)
        return res
    }
}