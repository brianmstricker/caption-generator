import { Request, Response } from "express";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

if (!process.env.S3_ACCESS_KEY_ID || !process.env.S3_SECRET_ACCESS_KEY || !process.env.AWS_REGION || !process.env.S3_BUCKET_NAME) {
 console.log(process.env.S3_ACCESS_KEY_ID);
 throw new Error("Missing AWS S3 credentials");
}

const client = new S3Client({
 region: process.env.AWS_REGION,
 credentials: {
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
 },
});

export const uploadVideo = async (req: Request, res: Response) => {
 try {
  const { file } = req;
  if (!file) return res.status(400).json({ message: "No file uploaded" });
  const randomString = Math.random().toString(36).substring(2, 18);
  const newName = `${randomString}-${file.originalname}`;
  await client.send(
   new PutObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: newName,
    Body: file.buffer,
    ACL: "public-read",
   })
  );
  const url = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${newName}`;
  // todo: video transcription
  return res.status(200).json({ url });
 } catch (error) {
  console.error(error);
  return res.status(500).json({ message: "Internal server error" });
 }
};
