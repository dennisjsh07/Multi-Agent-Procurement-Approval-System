import { RequestHandler } from "express";
import { AnyZodObject, ZodError } from "zod/v3";

export const validate =
  (schema: AnyZodObject): RequestHandler =>
  async (req, res, next) => {
    try {
      req.body = schema.parseAsync(req.body);
      next();
    } catch (err) {
      next(err);
    }
  };
