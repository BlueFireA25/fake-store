<template>
  <q-dialog
    full-height
    :position="$q.screen.gt.xs ? 'right' : 'standard'"
    ref="dialogRef"
    :maximized="$q.screen.gt.xs ? false : true"
    @hide="onDialogHide"
  >
    <q-card class="shopping__card">
      <q-card-section class="row justify-between items-center q-pa-lg">
        <h2 class="text-h5 text-weight-bold text-dark q-my-none">Your Cart</h2>
        <q-btn flat round icon="times" color="dark" @click="onDialogCancel" />
      </q-card-section>

      <q-separator inset />

      <q-card-section class="q-pa-lg" v-if="cart.products.length">
        <div v-for="product in cart.products" :key="product.productId">
          <div class="row q-col-gutter-md q-py-md">
            <div
              :class="{ 'col-2': $q.screen.gt.xs, 'col-auto': $q.screen.lt.sm }"
            >
              <q-img
                :src="getProduct(product.productId)?.image"
                :ratio="16 / 9"
                spinner-color="dark"
                spinner-size="30px"
                fit="contain"
                width="60px"
                height="60px"
              />
            </div>
            <div class="col-8">
              <h3
                class="text-subtitle1 text-dark text-weight-bold q-mt-none q-mb-xs ellipsis-2-lines"
              >
                {{ getProduct(product.productId)?.title }}
              </h3>
              <div class="row items-center">
                <div class="q-mr-md">
                  <p
                    class="text-subtitle1 text-dark text-weight-medium q-my-none"
                  >
                    $ {{ getProduct(product.productId)?.price }} USD
                  </p>
                  <p class="text-caption text-grey q-my-none">
                    {{ getProduct(product.productId)?.category }}
                  </p>
                </div>
                <q-btn
                  flat
                  round
                  color="dark"
                  icon="trash-alt"
                  @click="removeAllProduct(getProduct(product.productId))"
                />
              </div>
            </div>
            <q-input
              onkeydown="return false"
              v-bind:model-value="product.quantity"
              :class="{ 'col-2': $q.screen.gt.xs, 'col-12': $q.screen.lt.sm }"
              color="dark"
              outlined
              type="number"
              min="1"
              @update:model-value="
                setProduct(
                  getProduct(product.productId),
                  product.quantity,
                  $event
                )
              "
            />
          </div>
          <q-separator inset class="full-width" />
        </div>
      </q-card-section>

      <q-card-section
        class="shopping__card--notproducts q-pa-lg column justify-center items-center"
        v-else
      >
        <div class="column justify-center items-center">
          <q-icon name="dropbox" color="dark" size="100px" />
          <h3 class="text-h6 text-weight-medium text-dark q-mt-sm q-mb-xs">
            Your Cart is Empty
          </h3>
          <p class="text-body2 text-weight-regular text-dark q-mt-none q-mb-lg">
            Nothing in Your Basket. Time to Browse and Shop!
          </p>
          <q-btn
            label="Start shopping"
            class="text-subtitle1 text-weight-medium"
            color="dark"
            text-color="white"
            padding="10px 30px"
            no-caps
            :to="{ name: 'Shop' }"
            v-close-popup
          />
        </div>
      </q-card-section>

      <q-card-actions class="q-px-lg" v-if="cart.products.length">
        <div class="full-width row justify-between items-center q-mb-lg">
          <span class="text-subtitle1 text-weight-medium text-dark">
            Subtotal
          </span>
          <span class="text-subtitle1 text-weight-bold text-dark">
            $ {{ calculateSubTotal() }} USD
          </span>
        </div>
        <q-btn
          label="Continue to Checkout"
          :loading="checkout"
          class="text-subtitle1 text-weight-medium full-width"
          color="dark"
          text-color="white"
          padding="10px 30px"
          no-caps
          @click="continueToCheckout()"
        >
          <template v-slot:loading> <q-spinner-dots color="white" /></template>
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar, useDialogPluginComponent } from 'quasar';
import { Product } from 'src/components/models/product';
import { productStore } from 'src/stores/products';
import { cartStore } from 'src/stores/cart';

defineEmits([...useDialogPluginComponent.emits]);

const $q = useQuasar();
const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();
const productStoreInstance = productStore();
const products = productStoreInstance.$state;
const cartStoreInstance = cartStore();
const cart = cartStoreInstance.$state;
const checkout = ref<boolean>(false);

/**
 * Retrieves a product from the available products based on the provided productId.
 * @param productId - The unique identifier of the product to retrieve.
 * @returns The retrieved product, or undefined if the product with the given ID is not found.
 */
const getProduct = (productId: number): Product | undefined => {
  const product = products.find((prod) => prod.id === productId);
  return product;
};

/**
 * Modifies the cart by either adding or removing a product based on the provided conditions.
 * @param product - The product to be modified in the cart.
 * @param productQuantity - The current quantity of the product in the cart.
 * @param inputQuantity - The new quantity provided as input.
 */
const setProduct = (
  product: Product | undefined,
  productQuantity: number,
  inputQuantity: string | number | null
): void => {
  if (product) {
    if (Number(inputQuantity) > productQuantity) {
      cartStoreInstance.addProductCart(product, 1);
    } else {
      cartStoreInstance.removeProductCart(product);
    }
  }
};

/**
 * Removes all occurrences of a specific product from the cart.
 * @param product - The product to be completely removed from the cart.
 */
const removeAllProduct = (product: Product | undefined): void => {
  if (product) {
    cartStoreInstance.removeAllProductCart(product);
  }
};

/**
 * Calculates the subtotal of the products in the cart based on their quantities and prices.
 * @returns The calculated subtotal of the products in the cart.
 */
const calculateSubTotal = (): number => {
  let subTotal = 0;

  for (const productCart of cart.products) {
    const existingProduct = products.find(
      (product) => product.id === productCart.productId
    );

    if (existingProduct) {
      subTotal += existingProduct.price * productCart.quantity;
    }
  }

  return parseFloat(subTotal.toFixed(2));
};

/**
 * Initiates the checkout process and displays a notification.
 */
const continueToCheckout = (): void => {
  checkout.value = true;

  setTimeout(() => {
    $q.notify({
      type: 'negative',
      position: 'bottom-left',
      progress: true,
      timeout: 2000,
      message: 'Checkout is disabled on this site.',
      icon: 'wrench',
      classes: 'text-weight-medium',
      textColor: 'white',
    });

    checkout.value = false;
    onDialogOK();
  }, 2000);
};
</script>

<style scoped lang="scss">
.shopping__card--notproducts {
  flex: 1;
}

@media (min-width: $breakpoint-sm-min) {
  .shopping__card {
    width: 500px !important;
  }
}
</style>
