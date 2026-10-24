import type { Request, Response } from "express";
import { db } from "../db/index.js";
import { tasks } from "../db/schema.js";
export const taskGetAll = async (req: Request, res: Response) => {
  try {
    //get all tasks
    const allTasks = await db.select().from(tasks);
    //send to api
    res.status(200).json({
      success: true,
      data: allTasks,
    });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách task:", error);
    res.status(500).json({
      success: false,
      message: "Lỗi server nội bộ",
    });
  }
};
