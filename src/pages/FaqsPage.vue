<template>
  <q-page class="q-px-md">
    <HeroCard :hero-card="heroCard" />

    <div class="container q-mx-auto q-px-md">
      <div class="q-mb-xl">
        <h2
          :class="{
            'text-weight-bold q-mt-none q-mb-lg': true,
            'text-h5': $q.screen.gt.xs,
            'text-h6': $q.screen.lt.sm,
          }"
        >
          General
        </h2>

        <q-expansion-item
          class="bg-grey-1 text-subtitle1 text-weight-bold faqs__expansion q-mb-lg"
          label="Is my personal information secure on your site?"
          expand-icon="angle-down"
        >
          <q-card class="bg-grey-1 text-body2 text-weight-regular text-dark">
            <q-card-section class="q-pt-sm">
              Yes, we take your privacy seriously. Our website uses advanced
              encryption protocols to secure your personal information, and we
              do not share your data with third parties.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          class="bg-grey-1 text-subtitle1 text-weight-bold faqs__expansion q-mb-lg"
          label="How can I reset my password?"
          expand-icon="angle-down"
        >
          <q-card class="bg-grey-1 text-body2 text-weight-regular text-dark">
            <q-card-section class="q-pt-sm">
              If you forget your password, click on the "Forgot Password" link
              on the login page. Follow the instructions in the email we send
              you to reset your password securely.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          class="bg-grey-1 text-subtitle1 text-weight-bold faqs__expansion"
          label="What payment methods do you accept?"
          expand-icon="angle-down"
        >
          <q-card class="bg-grey-1 text-body2 text-weight-regular text-dark">
            <q-card-section class="q-pt-sm">
              We accept a variety of payment methods, including credit cards,
              debit cards, and PayPal. You can find the full list of accepted
              payment methods during the checkout process.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>

      <div class="q-mb-xl">
        <h2
          :class="{
            'text-weight-bold q-mt-none q-mb-lg': true,
            'text-h5': $q.screen.gt.xs,
            'text-h6': $q.screen.lt.sm,
          }"
        >
          Products
        </h2>

        <q-expansion-item
          class="bg-grey-1 text-subtitle1 text-weight-bold faqs__expansion q-mb-lg"
          label="How can I find products on your website?"
          expand-icon="angle-down"
        >
          <q-card class="bg-grey-1 text-body2 text-weight-regular text-dark">
            <q-card-section class="q-pt-sm">
              Utilize the search bar at the top of the page or browse through
              our categories to find the products you're looking for. You can
              also use filters to narrow down your search.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          class="bg-grey-1 text-subtitle1 text-weight-bold faqs__expansion q-mb-lg"
          label="Are product images accurate to the actual items?"
          expand-icon="angle-down"
        >
          <q-card class="bg-grey-1 text-body2 text-weight-regular text-dark">
            <q-card-section class="q-pt-sm">
              Yes, our product images are professionally taken and accurately
              represent the items you will receive. However, please note that
              colors may vary slightly depending on your device's display
              settings.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          class="bg-grey-1 text-subtitle1 text-weight-bold faqs__expansion q-mb-lg"
          label="What if the product I want is out of stock?"
          expand-icon="angle-down"
        >
          <q-card class="bg-grey-1 text-body2 text-weight-regular text-dark">
            <q-card-section class="q-pt-sm">
              If a product is out of stock, you can sign up for notifications to
              be informed when it becomes available again. Alternatively, check
              back regularly as our stock is frequently updated.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          class="bg-grey-1 text-subtitle1 text-weight-bold faqs__expansion"
          label="Do you offer product customization or personalization?"
          expand-icon="angle-down"
        >
          <q-card class="bg-grey-1 text-body2 text-weight-regular text-dark">
            <q-card-section class="q-pt-sm">
              Yes, we offer customization options on select products. Look for
              the customization tab on the product page for details on available
              options.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>

      <div class="q-mb-xl">
        <h2
          :class="{
            'text-weight-bold q-mt-none q-mb-lg': true,
            'text-h5': $q.screen.gt.xs,
            'text-h6': $q.screen.lt.sm,
          }"
        >
          Shipping and Returns
        </h2>

        <q-expansion-item
          class="bg-grey-1 text-subtitle1 text-weight-bold faqs__expansion q-mb-lg"
          label="What are your shipping options and delivery times?"
          expand-icon="angle-down"
        >
          <q-card class="bg-grey-1 text-body2 text-weight-regular text-dark">
            <q-card-section class="q-pt-sm">
              We offer standard and express shipping options. Delivery times
              vary based on your location and the chosen shipping method. You
              can view estimated delivery times during the checkout process.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          class="bg-grey-1 text-subtitle1 text-weight-bold faqs__expansion q-mb-lg"
          label="How can I track my order?"
          expand-icon="angle-down"
        >
          <q-card class="bg-grey-1 text-body2 text-weight-regular text-dark">
            <q-card-section class="q-pt-sm">
              Once your order is shipped, you will receive a tracking number via
              email. Use this number on our "Track Order" page to monitor the
              status and location of your shipment.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          class="bg-grey-1 text-subtitle1 text-weight-bold faqs__expansion"
          label="What is your return policy?"
          expand-icon="angle-down"
        >
          <q-card class="bg-grey-1 text-body2 text-weight-regular text-dark">
            <q-card-section class="q-pt-sm">
              Our return policy allows you to return items within 30 days of
              purchase for a full refund. Please review our "Returns and
              Exchanges" page for detailed instructions and conditions.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import HeroCard from 'src/components/HeroCard.vue';
import { HeroCardProps } from 'src/components/models';

const heroCard: HeroCardProps = {
  title: 'Frequently asked questions',
};
</script>

<style scoped>
.faqs__expansion {
  border-radius: 10px;
}
</style>
