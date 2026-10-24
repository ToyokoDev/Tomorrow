import type { Request, Response } from "express";
export const taskGetAll = async (req: Request, res: Response) => {
  res.send("get all task");
};
