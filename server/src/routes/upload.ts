import express from "express";
import { uploadVideo } from "../controllers/upload";
import multer from "multer";

const upload = express.Router();
const up = multer({
 storage: multer.memoryStorage(),
});
upload.post("/", up.single("video"), uploadVideo);

export default upload;
