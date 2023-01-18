import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const posts = await prisma.post.findMany({
      include: { author: true },
    });

    res.status(200).json({
      ok: true,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

export const store = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content, author } = req.body;

    await prisma.post.create({
      data: {
        title,
        content,
        author: { connect: { id: author } },
      },
    });

    res.status(201).json({ ok: true, message: "Post creado correctamente" });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};
