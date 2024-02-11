import { defineStore } from 'pinia';
import { Notify } from 'quasar';
import { api } from 'src/boot/axios';
import { Product } from 'src/components/models/product';

function defaultState(): Product[] {
  return [];
}

export const productStore = defineStore('products', {
  state: () => defaultState(),

  actions: {
    /**
     * Fetches and returns a list of all products from the API.
     *
     * @returns A promise that resolves to an array of products.
     * @throws Throws an error if there is an issue loading the products list.
     */
    async allProducts(): Promise<Product[]> {
      try {
        const response = await api.get('/products');
        const products = response.data as Product[];
        this.$state = products;

        return products;
      } catch (error) {
        Notify.create({
          icon: 'exclamation-triangle',
          type: 'negative',
          message: 'Error loading Products list',
          position: 'bottom-left',
          progress: true,
          timeout: 2000,
          classes: 'text-weight-medium',
          textColor: 'white',
        });

        throw new Error('Error loading Products list');
      }
    },

    /**
     * Fetches and returns a list of all product categories from the API.
     *
     * @returns A promise that resolves to an array of category names.
     * @throws Throws an error if there is an issue loading the categories list.
     */
    async allCategories(): Promise<string[]> {
      try {
        const response = await api.get('/products/categories');
        const categories = response.data as string[];

        return categories;
      } catch (error) {
        Notify.create({
          icon: 'exclamation-triangle',
          type: 'negative',
          message: 'Error loading Categories list',
          position: 'bottom-left',
          progress: true,
          timeout: 2000,
          classes: 'text-weight-medium',
          textColor: 'white',
        });

        throw new Error('Error loading Categories list');
      }
    },

    /**
     * Fetches and returns details of a single product based on the provided productId.
     *
     * @param productId - The unique identifier of the product to retrieve.
     * @returns A promise that resolves to the details of the specified product.
     * @throws Throws an error if there is an issue obtaining the product details.
     */
    async singleProduct(productId: number): Promise<Product> {
      try {
        const response = await api.get(`/products/${productId}`);

        return response.data;
      } catch (error) {
        Notify.create({
          icon: 'exclamation-triangle',
          type: 'negative',
          message: 'Error obtaining the product',
          position: 'bottom-left',
          progress: true,
          timeout: 2000,
          classes: 'text-weight-medium',
          textColor: 'white',
        });

        throw new Error('Error obtaining the product');
      }
    },
  },
});
