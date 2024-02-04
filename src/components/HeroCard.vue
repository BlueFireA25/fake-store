<template>
  <div class="hero__card q-mx-auto">
    <h1
      :class="{
        'text-weight-bold text-dark text-center q-mt-none q-mb-md': true,
        'text-h3': $q.screen.gt.sm,
        'text-h4': $q.screen.lt.md,
      }"
    >
      {{ heroCard.title }}
    </h1>
    <p
      :class="{
        'text-weight-medium text-dark text-center q-mt-none q-mb-md': true,
        'text-body1': $q.screen.gt.sm,
        'text-body2': $q.screen.lt.md,
      }"
      v-if="heroCard.description"
    >
      {{ heroCard.description }}
    </p>
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
