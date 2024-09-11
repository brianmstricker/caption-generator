import { createUploadthing, type FileRouter } from "uploadthing/express";

const f = createUploadthing({
 errorFormatter: (err) => {
  console.log("Error uploading file", err.message);
  console.log("  - Above error caused by:", err.cause);
  return { message: err.message };
 },
});

export const uploadRouter = {
 uploadVideo: f({
  video: {
   maxFileSize: "32MB",
   maxFileCount: 1,
  },
 })
  .onUploadError((err) => {
   console.log("Error uploading video", err.error.message);
   return { message: err.error.message };
  })
  .onUploadComplete((data) => {
   console.log("upload completed", data);
   return data;
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
