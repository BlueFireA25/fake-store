<template>
  <q-page class="q-px-md">
    <div
      class="product__container q-mx-auto row q-col-gutter-xl"
      v-if="product"
    >
      <div
        :class="{
          'product__image shadow-2 q-pa-lg row justify-center': true,
          'col-6': $q.screen.gt.sm,
          'col-12 q-mb-xl': $q.screen.lt.md,
        }"
      >
        <q-img
          :src="product.image"
          loading="lazy"
          :ratio="16 / 9"
          spinner-color="primary"
          spinner-size="82px"
          fit="contain"
          :width="$q.screen.gt.sm ? '540px' : '290px'"
          :height="$q.screen.gt.sm ? '540px' : '290px'"
        />
      </div>
      <div
        :class="{
          'col-6': $q.screen.gt.sm,
          'col-12 q-pa-none': $q.screen.lt.md,
        }"
      >
        <h1
          :class="{
            'product__title text-dark text-weight-bold q-mt-none q-mb-lg ellipsis-2-lines': true,
            'text-h3': $q.screen.gt.xs,
            'text-h4': $q.screen.lt.sm,
          }"
        >
          {{ product.title }}
        </h1>
        <div class="row items-center q-col-gutter-x-lg q-mb-lg">
          <h2 class="text-h5 text-weight-bold text-dark q-my-none">
            $ {{ product.price }} USD
          </h2>
          <span class="text-subtitle2 text-grey-2">{{ product.category }}</span>
        </div>
        <p class="text-body2 text-weight-regular text-black q-mt-none q-mb-lg">
          {{ product.description }}
        </p>
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
        <q-input
          v-model="quantity"
          class="product__quantity q-mb-lg"
          color="dark"
          outlined
          type="number"
          min="1"
          @update:model-value="validateMin()"
        />

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
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Product } from 'src/components/models/product';
import { productStore } from 'src/stores/products';
import { cartStore } from 'src/stores/cart';

const route = useRoute();
const productStoreInstance = productStore();
const cartStoreInstance = cartStore();
const product = ref<Product | undefined>();
const quantity = ref<number>(1);

/**
 * Adds a specified quantity of a product to the cart.
 *
 * @param product - The product to be added to the cart.
 */
const addProduct = (product: Product): void => {
  cartStoreInstance.addProductCart(product, Number(quantity.value));
};

/**
 * Validates and ensures that the quantity value is at least 1.
 * If the current quantity value is less than 1, it is set to 1.
 */
const validateMin = () => {
  if (quantity.value < 1) {
    quantity.value = 1;
  }
};

onMounted(async () => {
  product.value = await productStoreInstance.singleProduct(
    Number(route.params.id)
  );
});
</script>

<style scoped lang="scss">
.product__title {
  line-height: 1.3em;
}

.product__container {
  max-width: 1200px;
  padding: 80px 0 0 0;
}

.product__image {
  border-radius: 10px;
}

.product__quantity {
  max-width: 150px;
}
</style>
