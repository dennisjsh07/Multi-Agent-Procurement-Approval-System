import { prisma } from "../../config/prisma.js";
import { CreateUserDto } from "./users.schema.js";

export const getUsers = async () => {
  return prisma.user.findMany();
};

export const createUser = async (data: CreateUserDto) => {
  return prisma.user.create({ data });
};
