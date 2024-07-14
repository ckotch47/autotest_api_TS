import {config as env} from "./config";
import * as requestSupertest from 'supertest';
import supertest from "supertest";

export const request: any = requestSupertest(env.baseUrl);
// const test = supertest('')
// test.get()

class RequestParam{
    auth?: {
        user: string,
        pass: string,
        options?: { type: "basic" | "auto"; encoder?: (str: string) => string }
    } | undefined;
    set?: Record<string, string> | undefined;
    query?: Record<string, any> | undefined;
    body?:  Record<string, any> | undefined;
}

export class Request{
    request:  any = requestSupertest(env.baseUrl);
    auth:Record<string, any> | undefined = undefined;
    headers:Record<string, string> = {}


    public async get(path: string, param: RequestParam | undefined = undefined): Promise<Response>{
        const header = param?.set ? {...param.set, ...this.headers} : this.headers
        if(this.auth)
            return await this.request
                .get(path)
                .set(header)
                .query(param?.query ?? {})
                .auth(this.auth.token, this.auth.options)

        if(param?.auth)
            return await this.request
                .get(path)
                .set(header)
                .query(param?.query ?? {})
                .auth(param.auth)

        return await this.request
            .get(path)
            .set(header)
            .query(param?.query ?? {})
    }

    public async post(path: string, param: RequestParam){
        const header = param?.set ? {...param.set, ...this.headers} : this.headers
        if(this.auth)
            return await this.request
                .post(path)
                .set(header)
                .send(param?.body ?? {})
                .auth(this.auth.token, this.auth.options)

        if(param?.auth)
            return await this.request
                .post(path)
                .set(header)
                .send(param?.body ?? {})
                .auth(param.auth)

        return await this.request
            .post(path)
            .set(header)
            .send(param?.body ?? {})
    }

    public async patch(path: string, param: RequestParam){
        const header = param?.set ? {...param.set, ...this.headers} : this.headers
        if(this.auth)
            return await this.request
                .patch(path)
                .set(header)
                .send(param?.body ?? {})
                .auth(this.auth.token, this.auth.options)

        if(param?.auth)
            return await this.request
                .patch(path)
                .set(header)
                .send(param?.body ?? {})
                .auth(param.auth)

        return await this.request
            .patch(path)
            .set(header)
            .send(param?.body ?? {})
    }

    public async put(path: string, param: RequestParam){
        const header = param?.set ? {...param.set, ...this.headers} : this.headers
        if(this.auth)
            return await this.request
                .put(path)
                .set(header)
                .send(param?.body ?? {})
                .auth(this.auth.token, this.auth.options)

        if(param?.auth)
            return await this.request
                .put(path)
                .set(header)
                .send(param?.body ?? {})
                .auth(param.auth)

        return await this.request
            .put(path)
            .set(header)
            .send(param?.body ?? {})
    }

    public async delete(path: string, param: RequestParam | undefined = undefined): Promise<Response>{
        const header = param?.set ? {...param.set, ...this.headers} : this.headers
        if(this.auth)
            return await this.request
                .delete(path)
                .set(header)
                .query(param?.query ?? {})
                .auth(this.auth.token, this.auth.options)

        if(param?.auth)
            return await this.request
                .delete(path)
                .set(header)
                .query(param?.query ?? {})
                .auth(param.auth)

        return await this.request
            .delete(path)
            .set(header)
            .query(param?.query ?? {})
    }


    public setBearerToken(bearerToken: string){
        this.auth = {token: bearerToken, options: {type: 'bearer'}}
    }

    public setHeaders(obj: Record<string, string>){
        this.headers = {...this.headers, ...obj}
    }


}
export const request2 = new Request()