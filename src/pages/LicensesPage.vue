<template>
  <q-page class="q-px-md">
    <HeroCard :hero-card="heroCard" />

    <div class="container q-mx-auto q-px-md">
      <q-card class="licenses__card q-pa-md q-mb-xl">
        <q-card-section class="bg-grey-1 q-pa-lg">
          <h2
            :class="{
              'text-weight-bold q-my-none': true,
              'text-h5': $q.screen.gt.xs,
              'text-h6': $q.screen.lt.sm,
            }"
          >
            Photography
          </h2>
        </q-card-section>
        <q-card-section>
          <p class="q-my-none">
            All images in this template are sourced from Pexels and Freepik and,
            are free for commercial use. Check out the license for Pexels here
            and Freepik here.
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
            All Icons in this template are sourced from Flaticon and Iconstica
            icon. Check out the license for Flaticon here and Iconstica icon
            here.
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
            All fonts used in this template are available to use freely under
            the Google fonts License, Check out the license for Poppins fonts
            license, and Inter fonts license.
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
    "All graphical assets in this template are licensed for personal and commercial use. If you'd like to use a specific asset, please check the license below.",
};
</script>

<style scoped lang="scss">
.licenses__card {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
}
</style>
