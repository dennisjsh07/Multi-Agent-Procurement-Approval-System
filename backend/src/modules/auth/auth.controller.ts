import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service.js";
import { ApiResponse } from "../../shared/responses/ApiResponse.js";

export class AuthController {
  static async getUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const users = await AuthService.getUsers();

      return res.json(
        new ApiResponse(
          true,
          "Users fetched successfully",
          users
        )
      );
    } catch (err) {
      next(err);
    }
  }

  static async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = await AuthService.createUser(req.body);

      return res.status(201).json(
        new ApiResponse(
          true,
          "User created successfully",
          user
        )
      );
    } catch (err) {
      next(err);
    }
  }
}