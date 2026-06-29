import { BaseError } from "./BaseError.js";

export class UnauthorizedError extends BaseError {
  constructor(message: string) {
    super(401, message);
  }
}
