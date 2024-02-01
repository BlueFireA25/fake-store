<template>
  <div v-for="essentialLink in essentialLinks" :key="essentialLink.title">
    <q-item
      class="text-dark"
      clickable
      tag="a"
      :to="{ name: essentialLink.link }"
      exact
      exact-active-class="active-link"
    >
      <q-item-section v-if="essentialLink.icon" avatar>
        <q-icon :name="essentialLink.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ essentialLink.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { EssentialLinkProps } from './models';

defineProps({
  essentialLinks: {
    type: Object as PropType<EssentialLinkProps[]>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.active-link {
  color: #222222 !important;
}
</style>
