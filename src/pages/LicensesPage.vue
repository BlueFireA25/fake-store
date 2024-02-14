<template>
  <q-page class="q-px-md">
    <HeroCard :hero-card="heroCard" />

    <div class="container q-mx-auto q-px-md">
      <q-card class="licenses__card q-pa-md q-mb-xl">
        <q-card-section class="bg-grey-1 q-pa-lg">
          <h2
            :class="{
              'text-dark text-weight-bold q-my-none': true,
              'text-h5': $q.screen.gt.xs,
              'text-h6': $q.screen.lt.sm,
            }"
          >
            Photography
          </h2>
        </q-card-section>
        <q-card-section>
          <p class="q-my-none">
            All images in this page are sourced from and Unsplash, are for
            commercial use.
          </p>
        </q-card-section>
      </q-card>
      <q-card class="licenses__card q-pa-md q-mb-xl">
        <q-card-section class="bg-grey-1 q-pa-lg">
          <h2
            :class="{
              'text-weight-bold q-my-none': true,
              'text-h5': $q.screen.gt.xs,
              'text-h6': $q.screen.lt.sm,
            }"
          >
            Icons
          </h2>
        </q-card-section>
        <q-card-section>
          <p class="q-my-none">
            All Icons in this page are sourced from Iconscout.
          </p>
        </q-card-section>
      </q-card>
      <q-card class="licenses__card q-pa-md">
        <q-card-section class="bg-grey-1 q-pa-lg">
          <h2
            :class="{
              'text-weight-bold q-my-none': true,
              'text-h5': $q.screen.gt.xs,
              'text-h6': $q.screen.lt.sm,
            }"
          >
            Fonts
          </h2>
        </q-card-section>
        <q-card-section>
          <p class="q-my-none">
            All fonts used in this page are available to use freely under the
            Google fonts License, Check out the license for Poppins fonts
            license.
          </p>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import HeroCard from 'src/components/HeroCard.vue';
import { HeroCardProps } from 'src/components/models/general';

const heroCard: HeroCardProps = {
  title: 'Licenses',
  description:
    "All graphical assets in this page are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.",
};
</script>

<style scoped lang="scss">
.licenses__card {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
}
</style>
