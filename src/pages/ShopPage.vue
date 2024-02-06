<template>
  <q-page class="q-px-md">
    <HeroCard :hero-card="heroCard" />

    <div class="container q-mx-auto q-px-md"></div>
  </q-page>
</template>

<script setup lang="ts">
import HeroCard from 'src/components/HeroCard.vue';
import { HeroCardProps } from 'src/components/models/general';

const heroCard: HeroCardProps = {
  title: 'Shop',
  description:
    "All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.",
};
</script>

<style scoped lang="scss">
.licenses__card {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
}
</style>
