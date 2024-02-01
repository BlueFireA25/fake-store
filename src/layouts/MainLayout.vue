<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-toolbar-title class="text-black"> Quasar App </q-toolbar-title>

        <EssentialLink :essential-links="essentialLinks" />

        <q-btn
          color="black"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-if="false" v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
        <EssentialLink :essential-links="essentialLinks" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { EssentialLinkProps } from 'src/components/models';
import EssentialLink from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Home',
    link: 'Home',
  },
  {
    title: 'Shop',
    link: 'Hol',
  },
  {
    title: 'About',
    link: 'asd',
  },
  {
    title: 'Blog',
    link: 'asd',
  },
  {
    title: 'FAQs',
    link: 'ddd',
  },
  {
    title: 'Contact',
    link: 'fdf',
  },
];

const leftDrawerOpen = ref<boolean>(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
