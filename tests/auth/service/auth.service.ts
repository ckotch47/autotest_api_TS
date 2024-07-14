import { UserDto } from "../dto/user.dto";
import {AuthRto} from "../rto/auth.rto";
import {RefreshTokenDto} from "../dto/refresh.token.dto";

import {bodyExpect} from "../../../src/common/base.expection";
import {BaseService} from "../../../src/common/base.service";

export class AuthService extends BaseService{
    public accessToken: string | undefined;
    public refreshToken: string | undefined;


    public async postAuth(user: UserDto): Promise<Response>{
        const res = await this.request.post('/v1/auth', {body: user})
        expect(res.status).toBe(200);

        const tmp: AuthRto = bodyExpect(AuthRto, res.body)
        this.saveToken(tmp);
        return res;
    }

    public async postRefreshToken(body: RefreshTokenDto): Promise<Response>{
        const res = await this.request.post('/v1/auth/refresh', {body: body});
        expect(res.status).toBe(200);

        const tmp: AuthRto = bodyExpect(AuthRto, res.body)
        this.saveToken(tmp);
        return res
    }

    private saveToken(body: AuthRto): void{
        this.accessToken = body.access_token;
        this.refreshToken = body.refresh_token;
    }
}

