<script lang="ts" setup>
const uploadVideo = (event: Event) => {
 const file = (event.target as HTMLInputElement).files?.[0];
 if (!file) return;
 if (!file.type.startsWith("video/")) {
  console.error("Only video files are allowed");
  return;
 }
 const formData = new FormData();
 formData.append("video", file);
 fetch("http://localhost:5000/upload", {
  method: "POST",
  body: formData,
 })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
};
</script>

<template>
 <div class="slide">
  <div
   class="h-[50vh] sm:h-[60vh] min-h-[400px] w-[180px] md:w-[260px] bg-black/40 rounded-xl flex items-center justify-center overflow-hidden border border-white/10 transition-all duration-200"
   id="upload-card"
  >
   <label
    class="bg-orange-500 px-4 py-2 rounded-full md:text-xl font-semibold hover:[boxShadow:0_0_32px_0_rgba(255,255,255,0.15)] transition-all duration-200 hover:scale-105 cursor-pointer"
    id="upload-card-button"
    aria-label="Upload video"
    for="upload-card-input"
   >
    Upload video
   </label>
   <input type="file" class="hidden" id="upload-card-input" @change="uploadVideo($event)" accept="video/*" />
  </div>
 </div>
</template>
