import { BaseError } from "./BaseError.js";

export class ConflictError extends BaseError {
  constructor(message: string) {
    super(409, message);
  }
}
