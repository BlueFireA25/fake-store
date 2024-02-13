<template>
  <div v-for="essentialLink in essentialLinks" :key="essentialLink.title">
    <q-item
      class="text-dark link cursor-pointer"
      tag="a"
      :to="{ name: essentialLink.link }"
      exact
      exact-active-class="active-link"
      role="link"
    >
      <q-item-section>
        <q-item-label>
          {{ essentialLink.title }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { EssentialLinkProps } from 'src/components/models/general';

defineProps({
  essentialLinks: {
    type: Object as PropType<EssentialLinkProps[]>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.link {
  font-weight: 600;
}

.link:hover {
  text-decoration: underline;
  text-underline-offset: 8px;
}

.active-link {
  cursor: pointer;
  color: #222222 !important;
  text-decoration: underline;
  text-underline-offset: 8px;
}
</style>
