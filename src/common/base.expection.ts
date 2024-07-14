import {ClassTransformOptions, plainToClass} from "class-transformer";
import {validateSync, ValidationError} from "@nestjs/class-validator";
import {ClassType} from "class-transformer/ClassTransformer";

export function bodyExpect<T, V>(cls: ClassType<T>, plain: V):T{
    // @ts-ignore
    const temp:cls = <cls><unknown>plainToClass(cls, plain);
    const error: ValidationError[] = validateSync(temp);
    if(error.length > 0){
        throw error;
    }
    return temp;

}