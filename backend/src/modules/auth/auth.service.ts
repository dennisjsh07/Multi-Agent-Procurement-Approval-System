import { prisma } from "../../config/prisma.js";
import { CreateUserDto } from "./auth.schema.js";

export class AuthService {
  static async createUser(data: CreateUserDto) {
    return prisma.user.create({
      data,
    });
  }

  static async getUsers() {
    return prisma.user.findMany();
  }
}