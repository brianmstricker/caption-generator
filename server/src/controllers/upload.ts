import { Request, Response } from "express";

export const uploadVideo = (req: Request, res: Response) => {
 try {
  const { file } = req;
  return res.status(200).json({ message: "res" });
 } catch (error) {
  console.error(error);
  return res.status(500).json({ message: "Internal server error" });
 }
};
