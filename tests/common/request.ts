import {config as env} from "../common/config";
import * as requestSupertest from 'supertest';
export const request: any = requestSupertest(env.baseUrl);
