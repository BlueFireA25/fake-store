<template>
  <q-page class="row items-center justify-evenly">
    <div class="text-black" v-for="product in products" :key="product.id">
      <!-- <q-img
        :src="product.image"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
        fit="contain"
        width="400px"
        height="400px"
      /> -->
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { Product } from 'src/components/models/general';
import { ref } from 'vue';
import { productStore } from 'src/stores/products';
import { onMounted } from 'vue';

const store = productStore();
const products = ref<Product[] | undefined>([]);
const categories = ref<string[] | undefined>([]);

onMounted(async () => {
  products.value = await store.allProducts();
  categories.value = await store.allCategories();
});
</script>
