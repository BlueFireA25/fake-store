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
        v-html="heroCard.description"
      ></p>
      <q-img
        v-if="heroCard.image"
        :src="heroCard.image"
        alt="Hero Image"
        :ratio="16 / 9"
        spinner-color="dark"
        spinner-size="50px"
      />
      <div
        v-if="heroCard.socials"
        class="row justify-center items-center q-col-gutter-lg"
      >
        <div v-for="social in heroCard.socials" :key="social.icon">
          <a :href="social.link" target="_blank" :aria-label="social.icon">
            <q-icon :name="social.icon" size="24px" color="dark" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { HeroCardProps } from 'src/components/models/general';

defineProps({
  heroCard: {
    type: Object as PropType<HeroCardProps>,
    required: true,
  },
});
</script>
