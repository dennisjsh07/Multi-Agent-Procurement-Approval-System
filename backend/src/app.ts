import express from "express";
import { prisma } from "./config/prisma.js";

const app = express();

app.use(express.json());

app.get("/api/users", async (req, res) => {
  try {
    res.send("Hello world");
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

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
