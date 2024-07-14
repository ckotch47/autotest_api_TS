import {Request} from "./request";

export class BaseService{
    public request: Request
    constructor(request: Request) {
        this.request = request
    }
}