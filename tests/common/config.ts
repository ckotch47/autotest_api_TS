import * as dotenv from "dotenv";

class Config{
    baseUrl: string;

    constructor() {
        dotenv.config({ path: process.cwd() + '/.env' });
        this.baseUrl = process.env.BASE_URL;
    }

}
export const config: Config = new Config();
