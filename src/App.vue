<template>
  <router-view />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

const $q = useQuasar();

$q.iconMapFn = (iconName: string) => {
  return {
    cls: 'uil uil-' + iconName,
  };
};
</script>
