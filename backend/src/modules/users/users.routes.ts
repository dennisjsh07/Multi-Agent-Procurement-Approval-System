import { Router } from "express";
import * as userController from "./users.controller.js";
import { validate } from "../../middlewares/validation.middleware.js";
import { CreateUserSchema } from "./users.schema.js";

const router = Router();

router.get("/users", userController.getUsers);

router.post("/users", validate(CreateUserSchema), userController.createUser);

export default router;
