<script setup lang="ts">
import UploadCard from "../components/home/UploadCard.vue";
</script>

<template>
 <div class="flex-1 flex flex-col justify-center items-center gap-10 overflow-hidden">
  <div>
   <h1 class="text-4xl sm:text-6xl text-balance text-center">Add captions to your videos!</h1>
   <p class="mt-1 text-center text-[15px] sm:text-lg text-neutral-200">Upload a video, wait a moment, and voila! Captions are generated!</p>
  </div>
  <UploadCard />
 </div>
</template>
