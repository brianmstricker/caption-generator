<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
 <Navbar />
 <main class="container px-5 mt-4 flex-1 flex flex-col pb-4">
  <RouterView />
 </main>
</template>
