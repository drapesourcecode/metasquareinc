<template>
  <div>
    <div id="loading" v-if="loading">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div class="preloader__content text-center">
            <div class="preloader__logo">
              <img class="logo-image" src="/assets/images/logo/logo___white.png" alt="" />
            </div>
            <div id="st-loading-bar" class="preloader__bar">
              <div id="st-loading-line" class="preloader__bar-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000); // 5 seconds
});
</script>

<style   scoped>
.logo-image{
  height: 58px !important;
  width: 250px !important;
}
</style>
