import { UserDto } from "./dto/user.dto";
import { AuthInterface } from "./rto/auth.interface";
import {request} from "../common/request";
import {RefreshTokenDto} from "./dto/refresh.token.dto";

class AuthService{
    public accessToken: string;
    public refreshToken: string;

    public async postAuth(user: UserDto): Promise<Response>{
        const res = await request
            .post('/v1/auth')
            .send(user);
        expect(res.status).toBe(200);
        expect(<AuthInterface>res.body).not.toStrictEqual({});

        this.saveToken(<AuthInterface>res.body);
        return res;
    }

    public async postRefreshToken(body: RefreshTokenDto): Promise<Response>{
        const res = await request
            .post('/v1/auth/refresh')
            .send(body);

        expect(res.status).toBe(200);
        expect(<AuthInterface>res.body).not.toStrictEqual({});

        this.saveToken(<AuthInterface>res.body);
        return res
    }

    private saveToken(body: AuthInterface): void{
        this.accessToken = body.access_token;
        this.refreshToken = body.refresh_token;
    }
}

export const authService: AuthService = new AuthService()