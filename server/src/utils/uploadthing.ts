import { createUploadthing, type FileRouter } from "uploadthing/express";

const f = createUploadthing();
export const uploadThing = {
 upload: f({
  video: {
   maxFileSize: "32MB",
   maxFileCount: 1,
  },
 }).onUploadComplete((data) => {
  console.log("upload completed", data);
 }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadThing;
