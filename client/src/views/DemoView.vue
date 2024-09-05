<script setup lang="ts">
import { FaArrowRight } from "vue3-icons/fa";
</script>
<!-- todo: refactor this page -->
<!-- <div>
   <h1 class="text-3xl sm:text-5xl">What is Captionize???</h1>
   <p class="mt-3 rounded-xl border px-4 py-2 max-w-[20ch] sm:max-w-[47ch]">
    Captionize is an app that creates captions for videos. Upload any video file, wait a moment, and voila, captions were generated!
   </p>
  </div> -->
<template>
 <div class="flex-1 flex flex-col justify-center items-center gap-10">
  <div>
   <h1 class="text-3xl sm:text-5xl text-balance text-center">Add captions to all of your videos!</h1>
   <p class="text-center text-lg text-neutral-200">Upload a video, wait a moment, and voila! Captions are generated!</p>
  </div>
  <div class="grid sm:grid-cols-2 w-fit gap-28 relative">
   <div
    class="h-[50vh] sm:h-[60vh] min-h-[200px] sm:min-h-[240px] w-[180px] md:w-[260px] bg-black/20 rounded-xl flex items-center justify-center"
   >
    <button
     class="bg-orange-500 px-4 py-2 rounded-full md:text-xl font-semibold"
     aria-label="Upload video"
     v-motion
     :initial="{ opacity: 0, y: 100, scale: 0.5, boxShadow: 'none' }"
     :enter="{
      opacity: 1,
      y: 0,
      scale: 1,
      transitionDuration: '170ms',
      boxShadow: 'none',
     }"
     :tapped="{ scale: 0.9, transitionDuration: '50ms' }"
     :hovered="{ scale: 1.05, transitionDuration: '50ms', boxShadow: '0 0 16px 0 rgba(255, 255, 255, 0.2)' }"
    >
     Upload video
    </button>
   </div>
   <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden sm:block">
    <FaArrowRight size="44" />
   </div>
   <div
    class="h-[50vh] sm:h-[60vh] min-h-[200px] sm:min-h-[240px] w-[180px] md:w-[260px] bg-black/20 rounded-xl items-center justify-center hidden sm:flex"
   />
  </div>
 </div>
 <!-- <div>
   <h1 class="text-3xl sm:text-5xl">What is Captionize???</h1>
   <p class="mt-3 rounded-xl border px-4 py-2 max-w-[20ch] sm:max-w-[47ch]">
    Captionize is an app that creates captions for videos. Upload any video file, wait a moment, and voila, captions were generated!
   </p>
  </div> -->
</template>
