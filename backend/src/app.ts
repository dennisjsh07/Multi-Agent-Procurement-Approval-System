import express from "express";
import { prisma } from "./config/prisma";

const app = express();

app.use(express.json());

app.post("/api/users", async (req, res) => {
  try {
    const { name, email, passwordHash } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
    });
    return res.status(201).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

export default app;
