<template>
  <q-page class="q-px-md">
    <HeroCard :hero-card="heroCard" />

    <div class="faqs q-mx-auto q-px-md"></div>
  </q-page>
</template>

<script setup lang="ts">
import HeroCard from 'src/components/HeroCard.vue';
import { HeroCardProps } from 'src/components/models';

const heroCard: HeroCardProps = {
  title: 'Licenses',
  description:
    "All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.",
};
</script>

<style scoped>
.faqs {
  max-width: 1000px;
  padding: 80px 0 0 0;
}

.faqs__expansion {
  border-radius: 10px;
}
</style>
