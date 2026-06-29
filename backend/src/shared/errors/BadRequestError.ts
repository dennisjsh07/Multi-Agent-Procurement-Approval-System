import { BaseError } from "./BaseError.js";

export class BadRequestError extends BaseError {
  constructor(message: string) {
    super(400, message);
  }
}
