import { BaseError } from "./BaseError.js"

export class ForbiddenError extends BaseError{
    constructor(message: string){
        super(403, message)
    }
}