import { generateUploadButton, generateUploadDropzone, generateVueHelpers, type GenerateTypedHelpersOptions } from "@uploadthing/vue";
import { BACKEND_URL } from "./constants";

const initOpts = {
 url: BACKEND_URL + "/api/uploadthing",
} satisfies GenerateTypedHelpersOptions;

export const UploadButton = generateUploadButton(initOpts);
export const UploadDropzone = generateUploadDropzone(initOpts);

export const { useUploadThing } = generateVueHelpers(initOpts);
