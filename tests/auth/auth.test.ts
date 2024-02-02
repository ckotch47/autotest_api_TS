import {authService} from "./auth.service";
import {UserDto} from "./dto/user.dto";

const user: UserDto = {
    mail: process.env.USER_MAIL,
    password: process.env.USER_PASSWORD
}

describe('Auth module',  () => {
    test('Auth user',
        async () => {
            await authService.postAuth(user)
        });

    test('Refresh token user', async () => {
        await authService.postRefreshToken(
            {refresh_token: authService.refreshToken}
        )
    })
});
