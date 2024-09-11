import express from "express";
import dotenv from "dotenv";
import { createRouteHandler } from "uploadthing/express";
import { uploadRouter } from "./utils/uploadthing.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(
 cors({
  origin: ["http://localhost:5173"],
 })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
 "/api/uploadthing",
 createRouteHandler({
  router: uploadRouter,
  config: {},
 })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
