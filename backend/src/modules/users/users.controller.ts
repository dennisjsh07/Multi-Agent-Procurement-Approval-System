import { Request, Response, NextFunction } from "express";
import { apiResponse } from "../../shared/responses/ApiResponse.js";
import * as userSevice from "./users.service.js";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await userSevice.getUsers();
    return res.status(200).json(
      apiResponse({
        success: true,
        message: "Users Fetched successfully",
        data: users,
      }),
    );
  } catch (err) {
    next(err);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log("Body", req.body);
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      passwordHash: req.body.passwordHash,
    };

    const user = await userSevice.createUser(newUser);
    return res.status(201).json(
      apiResponse({
        success: true,
        message: "User Created successfully",
        data: user,
      }),
    );
  } catch (err) {
    next(err);
  }
};
