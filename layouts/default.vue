<template>
  <div class="app-wrapper">
    <!-- Pre-loader -->

    <!-- Main Content -->
    <div class="site-wrapper" :class="{ loading: loading }">
      <main class="main-content">
        <Loading />
        <AppHeader />
        <slot />

        <AppFooter />

        <!-- <ModalBooking /> -->
      </main>
    </div>
    <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000); // 5 seconds
});

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "description",
      content:
        "Metasquareinc - Connecting businesses with investment opportunities",
    },
  ],
  
 
});
</script>

<style>
.preloader__bar {
  border-radius: 2px;
}
</style>
