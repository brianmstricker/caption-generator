<script setup lang="ts">
// import { ref } from 'vue'
// defineProps<{ msg: string }>()
// const count = ref(0)
import { FaClosedCaptioning } from "vue3-icons/fa";
</script>

<template>
 <nav class="shadow">
  <div class="container flex justify-between items-center py-5">
   <router-link
    to="/"
    class="flex items-center gap-2 text-xl sm:text-3xl font-bold hover:scale-105 transition-transform duration-200 focus-visible:scale-105 group"
    id="brand"
    aria-current-value="brand"
    ><div>Captionize</div>
    <FaClosedCaptioning size="24" class="group-hover:text-orange-300 transition-colors duration-200 group-focus-visible:text-orange-300" />
   </router-link>
   <div class="sm:text-lg">
    <router-link to="/about">About</router-link>
   </div>
  </div>
 </nav>
</template>
