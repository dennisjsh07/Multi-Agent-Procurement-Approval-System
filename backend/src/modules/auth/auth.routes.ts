import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import { validate } from "../../middlewares/validation.middleware.js";
import { CreateUserSchema } from "./auth.schema.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Users fetched successfully
 */
router.get("/users", AuthController.getUsers);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create user
 *     tags: [Authentication]
 *     responses:
 *       201:
 *         description: User created
 */
router.post(
  "/users",
  validate(CreateUserSchema),
  AuthController.createUser
);

export default router;