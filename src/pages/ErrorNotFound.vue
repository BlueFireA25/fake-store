<template>
  <div
    class="fullscreen bg-white text-white text-center q-pa-md flex flex-center"
  >
    <div class="error bg-grey-1">
      <h2 class="error__title text-weight-bold text-dark q-mt-none q-mb-md">
        404
      </h2>
      <h3 class="text-h4 text-weight-bold text-dark q-mt-none q-mb-md">
        Page Not Found
      </h3>
      <p class="text-body2 text-weight-medium text-dark q-mb-lg">
        The page you are looking for doesn't exist or has been moved
      </p>
      <q-btn
        class="q-mt-sm full-width text-subtitle1"
        color="black"
        text-color="white"
        padding="10px 30px"
        to="/"
        label="Back to home"
        no-caps
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.error {
  padding: 50px;
  border-radius: 10px;
}

.error__title {
  font-size: 150px;
}

@media (max-width: $breakpoint-xs-max) {
  .error {
    padding: 30px 15px;
  }

  .error__title {
    font-size: 100px;
  }
}
</style>
