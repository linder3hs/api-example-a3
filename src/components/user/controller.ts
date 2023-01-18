import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json({
      ok: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

export const store = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;

    await prisma.user.create({ data });

    res.status(201).json({ ok: true, message: "Usuario creado correctamente" });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};
