import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import { apiResponse } from "../shared/responses/ApiResponse.js";
import { BaseError } from "../shared/errors/BaseError.js";

export function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // zod validation errors
  if (err instanceof ZodError) {
    return res.status(400).json(
      apiResponse({
        success: false,
        message: "Validation Failed",
        errors: z.treeifyError(err),
      }),
    );
  }

  // custom application errors
  if (err instanceof BaseError) {
    return res
      .status(err.statusCode)
      .json(apiResponse({ success: false, message: err.message }));
  }

  console.error(err);

  return res
    .status(500)
    .json(apiResponse({ success: false, message: "Internal Eerver Error" }));
}
