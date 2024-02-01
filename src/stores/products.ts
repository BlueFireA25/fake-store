import { defineStore } from 'pinia';
import { Notify } from 'quasar';
import { api } from 'src/boot/axios';
import { Product } from 'src/components/models';

function defaultState(): Product[] {
  return [];
}

export const productStore = defineStore('products', {
  state: () => defaultState(),

  actions: {
    async allProducts(): Promise<Product[] | undefined> {
      try {
        const response = await api.get('/products');
        const products = response.data as Product[];

        return products;
      } catch (error) {
        Notify.create({
          icon: 'warning',
          type: 'negative',
          message: 'Error loading Products list.',
          timeout: 2000,
        });
      }
    },

    async allCategories(): Promise<string[] | undefined> {
      try {
        const response = await api.get('/products/categories');
        const categories = response.data as string[];

        return categories;
      } catch (error) {
        Notify.create({
          icon: 'warning',
          type: 'negative',
          message: 'Error loading Categories list.',
          timeout: 2000,
        });
      }
    },
  },
});
