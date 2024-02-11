<template>
  <q-page class="q-px-md">
    <HeroCard :hero-card="heroCard" />

    <div class="shop__container q-mx-auto q-px-md">
      <ProductList :products="products" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { HeroCardProps } from 'src/components/models/general';
import { productStore } from 'src/stores/products';
import HeroCard from 'src/components/HeroCard.vue';
import ProductList from 'src/components/ProductList.vue';

const heroCard: HeroCardProps = {
  title: 'Shop',
  description:
    "All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.",
};

const productStoreInstance = productStore();
const products = productStoreInstance.$state;
</script>

<style scoped lang="scss">
.shop__container {
  max-width: 1200px;
  padding: 80px 0 0 0;
}
</style>
