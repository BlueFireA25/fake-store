import { defineStore } from 'pinia';
import { Notify } from 'quasar';
import { Cart, ProductCart } from 'src/components/models/cart';
import { Product } from 'src/components/models/product';
import { User } from 'src/components/models/user';

function defaultState(): Cart {
  return {} as Cart;
}

export const cartStore = defineStore('cart', {
  state: () => defaultState(),

  actions: {
    /**
     * Adds a new cart to state.
     * @returns The newly created cart object with an id, current date, and an empty array of products.
     */
    addCart(): Cart {
      const cart: Cart = {
        id: 1,
        date: new Date(),
        products: [],
      };

      this.$state = cart;

      return this.$state;
    },

    /**
     * Updates the current cart by optionally associating it with a user.
     * @param user - Optional parameter representing the user to associate with the cart.
     * @returns The updated cart object after the association with the provided user, or without a user if not provided.
     */
    updateCart(user?: User): Cart {
      if (user) {
        this.$state.userId = user.id;
      } else {
        delete this.$state.userId;
      }

      return this.$state;
    },

    /**
     * Adds a product to the current cart and returns the added product.
     * If the product is already in the cart, its quantity is increased.
     * @param product - The product to be added to the cart.
     * @returns The added product.
     */
    addProductCart(product: Product): Product {
      // Search for the product to be added to the `this.$state.cart`
      const existingProductIndex = this.$state.products.findIndex(
        (item) => item.productId === product.id
      );

      if (existingProductIndex !== -1) {
        // The product is already in the cart, the quantity is increased.
        this.$state.products[existingProductIndex].quantity++;
      } else {
        // The product is not in the cart, it is added as new.
        const productCart: ProductCart = {
          productId: product.id,
          quantity: 1,
        };

        this.$state.products.push(productCart);
      }

      Notify.create({
        type: 'positive',
        position: 'bottom-left',
        progress: true,
        timeout: 2000,
        message: 'Added Product',
        icon: 'box',
        classes: 'text-weight-medium',
        textColor: 'white',
      });

      return product;
    },

    /**
     * Removes all occurrences of a specific product from the current cart.
     * @param product - The product to be completely removed from the cart.
     * @returns The product that has been completely removed from the cart.
     */
    removeAllProductCart(product: Product): Product {
      // Search for the product to be added to the `this.$state.cart`
      const existingProductIndex = this.$state.products.findIndex(
        (item) => item.productId === product.id
      );

      if (existingProductIndex !== -1) {
        // The product is already in the cart, the all product removed.
        this.$state.products.splice(existingProductIndex, 1);
      }

      return product;
    },

    /**
     * Removes a product from the current cart and decreases its quantity.
     * If the product's quantity becomes zero, it remains in the cart with a quantity of zero.
     * @param product - The product to be removed from the cart.
     * @returns The removed product.
     */
    removeProductCart(product: Product): Product {
      // Search for the product to be added to the `this.$state.cart`
      const existingProductIndex = this.$state.products.findIndex(
        (item) => item.productId === product.id
      );

      if (existingProductIndex !== -1) {
        // The product is already in the cart, the quantity is diminishes.
        this.$state.products[existingProductIndex].quantity--;
      }

      return product;
    },
  },
});
