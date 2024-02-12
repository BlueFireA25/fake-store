<template>
  <q-page class="q-px-md">
    <HeroCard :hero-card="heroCard" />

    <div class="row justify-center items-center q-col-gutter-lg q-mt-lg">
      <div
        v-for="categ in categories"
        :key="categ"
        :class="{ 'col-auto': $q.screen.lt.md }"
      >
        <q-btn
          class="text-capitalize text-subtitle1 text-weight-medium"
          :text-color="categ === category ? 'white' : 'dark'"
          :color="categ === category ? 'dark' : 'white'"
          :label="categ"
          padding="15px 30px"
          @click="filterByCategory(categ)"
        />
      </div>
    </div>

    <div class="shop__container q-mx-auto q-px-md">
      <ProductList :products="paginatedProducts" />

      <div class="row justify-center">
        <q-pagination
          v-model="pagination"
          :max="totalPages"
          direction-links
          flat
          color="dark"
          padding="16px 24px"
          active-color="dark"
          icon-next="angle-right"
          icon-prev="angle-left"
          gutter="sm"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
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
const categories = ref<string[]>([]);
const category = ref<string>('all products');

const pagination = ref<number>(1);
const itemsPerPage = ref<number>(5);

const filteredProducts = computed(() => {
  if (category.value === 'all products') {
    return products;
  }

  return products.filter((product) => product.category === category.value);
});

const totalPages = computed(() =>
  Math.ceil(filteredProducts.value.length / itemsPerPage.value)
);

const startIndex = computed(() => (pagination.value - 1) * itemsPerPage.value);
const endIndex = computed(() => startIndex.value + itemsPerPage.value);
const paginatedProducts = computed(() =>
  filteredProducts.value.slice(startIndex.value, endIndex.value)
);

const filterByCategory = (buttonCategory: string) => {
  category.value = buttonCategory;
  pagination.value = 1;
};

onMounted(async () => {
  categories.value = await productStoreInstance.allCategories();
  categories.value.unshift('all products');
});
</script>

<style scoped lang="scss">
.shop__container {
  max-width: 1200px;
  padding: 80px 0 0 0;
}
</style>
