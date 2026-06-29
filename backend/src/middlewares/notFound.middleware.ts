import { Request, Response } from "express";
import { apiResponse } from "../shared/responses/ApiResponse.js";

export const notFoundMiddleware = (req: Request, res: Response) => {
  return res.status(404).json(
    apiResponse({
      success: false,
      message: `Route ${req.originalUrl} not found`,
    }),
  );
};
