import express from "express";
import dotenv from "dotenv";
import { createRouteHandler } from "uploadthing/express";
import { uploadThing } from "./utils/uploadthing.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use(
 "/api/uploadthing",
 createRouteHandler({
  router: uploadThing,
  config: {},
 })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
