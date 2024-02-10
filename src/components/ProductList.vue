<template>
  <div
    class="products__container row justify-center items-center q-col-gutter-xl"
  >
    <div v-for="product in products" :key="product.id">
      <q-card
        :class="{
          'product__card shadow-3': true,
          'q-pa-lg': $q.screen.gt.xs,
          'q-pa-md': $q.screen.lt.sm,
        }"
      >
        <q-card-section
          class="q-pa-none q-mb-md cursor-pointer"
          @click="() => console.log('asd')"
        >
          <q-img
            :src="product.image"
            :alt="product.title"
            :ratio="16 / 9"
            spinner-color="dark"
            spinner-size="80"
            fit="contain"
            :width="$q.screen.gt.xs ? '270px' : '200px'"
            :height="$q.screen.gt.xs ? '270px' : '200px'"
          />

          <div class="row no-wrap items-center q-mt-lg">
            <h3 class="col text-h6 text-dark ellipsis q-my-none">
              {{ product.title }}
            </h3>
          </div>

          <q-rating
            v-bind:model-value="product.rating.rate"
            max="5"
            size="2em"
            class="q-mb-md"
            color="yellow-8"
            icon="favorite"
            icon-half="uis uis-star-half-alt"
            icon-selected="uis uis-favorite"
            readonly
          />

          <p class="text-subtitle1 text-dark text-weight-bold q-my-none">
            $ {{ product.price }} USD
          </p>
          <span class="text-caption text-grey">
            {{ product.category }}
          </span>
        </q-card-section>

        <q-card-actions class="q-pa-none">
          <q-btn
            label="Add to Cart"
            class="text-subtitle1 text-weight-medium"
            color="dark"
            text-color="white"
            padding="10px 20px"
            icon="shopping-cart-alt"
            no-caps
            @click="addProduct(product)"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useQuasar } from 'quasar';
import { Product } from 'src/components/models/product';
import { cartStore } from 'src/stores/cart';

defineProps({
  products: {
    type: Object as PropType<Product[]>,
    required: true,
  },
});

const $q = useQuasar();
const store = cartStore();

const addProduct = (product: Product) => {
  store.addProductCart(product);
};
</script>

<style scoped lang="scss">
.products__container {
  padding: 0 0 80px 0;
}
</style>
