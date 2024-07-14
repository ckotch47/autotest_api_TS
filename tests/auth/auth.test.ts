import {AuthService} from "./service/auth.service";
import {UserDto} from "./dto/user.dto";
import {config} from "../../src/common/config";
import {Request, request2} from "../../src/common/request";

const user: UserDto = {
    mail: config.userMail,
    password: config.userPassword
}

describe('Auth module',  () => {
    const req = new Request()
    const authService = new AuthService(req)

    beforeAll(()=>{

    })
    test('Auth user',
        async () => {
            await authService.postAuth(user)
        });

    test('Refresh token user', async () => {
        await authService.postRefreshToken(
            {refresh_token: authService.refreshToken ?? ''}
        )
    })
});
