import type { Request, Response } from "express";
import Student from "./model";
import { IStudent } from "./interface";

export const findAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const students = await Student.find();

    res.json({
      ok: true,
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error,
    });
  }
};

export const store = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as IStudent;
    const student = new Student(body);
    await student.save();

    res.status(201).json({
      ok: true,
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error,
    });
  }
};
