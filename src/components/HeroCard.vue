<template>
  <div class="hero__card q-mx-auto">
    <div class="q-mx-auto">
      <h1
        :class="{
          'text-weight-bold text-dark text-center q-mt-none q-mb-none': true,
          'text-h3': $q.screen.gt.sm,
          'text-h4': $q.screen.lt.md,
        }"
      >
        {{ heroCard.title }}
      </h1>
      <p
        :class="{
          'text-weight-medium text-dark text-center q-mt-md q-mb-lg': true,
          'text-body1': $q.screen.gt.sm,
          'text-body2': $q.screen.lt.md,
        }"
        v-if="heroCard.description"
      >
        {{ heroCard.description }}
      </p>
      <q-img
        v-if="heroCard.image"
        :src="heroCard.image"
        alt="Hero Image"
        :ratio="16 / 9"
        spinner-color="dark"
        spinner-size="50px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { HeroCardProps } from './models';

defineProps({
  heroCard: {
    type: Object as PropType<HeroCardProps>,
    required: true,
  },
});
</script>
