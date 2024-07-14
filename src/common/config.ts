import * as dotenv from "dotenv";
import * as process from "node:process";

class Config{
    baseUrl: string;
    userMail: string;
    userPassword: string;

    constructor() {
        dotenv.config({ path: process.cwd() + '/.env' });
        this.baseUrl = process.env.BASE_URL ?? '';
        this.userMail = process.env.USER_MAIL ?? '';
        this.userPassword = process.env.USER_PASSWORD ?? '';
    }

}
export const config: Config = new Config();
