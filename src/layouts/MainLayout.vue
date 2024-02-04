<template>
  <q-layout view="lhh Lpr lff">
    <q-header class="row justify-center bg-white q-py-lg q-px-md">
      <q-toolbar class="justify-between items-center toolbar q-px-none">
        <q-img
          src="https://assets-global.website-files.com/654c5f578cae1dae48ca94a1/65574e271e32ab415a28fe78_gravitycreation.svg"
          alt="Logo"
          :ratio="16 / 9"
          spinner-color="primary"
          spinner-size="82px"
          fit="contain"
          width="150px"
          height="50px"
        />

        <div class="row text-uppercase" v-if="$q.screen.gt.sm">
          <EssentialLink :essential-links="essentialLinksHeader" />
        </div>

        <div class="row items-center q-gutter-x-lg">
          <q-btn flat round color="dark" icon="setting" v-if="$q.screen.gt.sm">
            <q-menu
              :offset="[50, 15]"
              transition-show="scale"
              transition-hide="scale"
            >
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <div class="text-h6 text-dark q-mb-md">Settings</div>
                  <q-btn flat round color="dark" icon="moon" />
                  <q-btn flat round color="dark" icon="language" />
                </div>

                <q-separator vertical inset class="q-mx-lg" />

                <div class="column items-center">
                  <q-avatar size="72px">
                    <img
                      src="https://cdn.quasar.dev/img/avatar4.jpg"
                      alt="User"
                    />
                  </q-avatar>

                  <div class="text-subtitle1 text-dark q-mt-sm q-mb-xs">
                    John Doe
                  </div>

                  <q-btn
                    color="dark"
                    text-color="white"
                    label="Logout"
                    push
                    size="sm"
                    v-close-popup
                  />
                </div>
              </div>
            </q-menu>
          </q-btn>

          <q-btn
            v-if="$q.screen.gt.sm"
            class="bg-dark"
            text-color="white"
            dense
            padding="12px md"
            no-caps
            icon="shopping-cart-alt"
            label="Cart"
            aria-label="Cart"
          >
            <q-badge
              class="text-weight-bold shadow-3"
              color="grey-1"
              text-color="dark"
              floating
              rounded
            >
              4
            </q-badge>
          </q-btn>

          <q-btn
            v-if="$q.screen.lt.md"
            class="bg-black"
            color="white"
            dense
            padding="12px"
            icon="bars"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
        </div>
      </q-toolbar>
    </q-header>

    <!-- Mobile Menu-->
    <q-drawer v-model="leftDrawerOpen">
      <div class="column justify-center items-center">
        <div
          class="row justify-between items-center full-width q-pt-lg q-px-lg q-pb-xl"
        >
          <q-img
            src="https://assets-global.website-files.com/654c5f578cae1dae48ca94a1/65574e271e32ab415a28fe78_gravitycreation.svg"
            alt="Logo"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
            fit="contain"
            width="150px"
            height="50px"
          />

          <q-btn
            class="bg-black full-height"
            color="white"
            flat
            dense
            round
            padding="12px"
            icon="times"
            aria-label="Close Menu"
            @click="toggleLeftDrawer"
          />
        </div>

        <div class="column items-center text-uppercase">
          <EssentialLink :essential-links="essentialLinksHeader" />
        </div>

        <q-btn flat round color="dark" icon="setting">
          <q-menu
            :offset="[100, 15]"
            transition-show="scale"
            transition-hide="scale"
          >
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 text-dark q-mb-md">Settings</div>
                <q-btn flat round color="dark" icon="moon" />
                <q-btn flat round color="dark" icon="language" />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img
                    src="https://cdn.quasar.dev/img/avatar4.jpg"
                    alt="User"
                  />
                </q-avatar>

                <div class="text-subtitle1 text-dark q-mt-sm q-mb-xs">
                  John Doe
                </div>

                <q-btn
                  color="dark"
                  text-color="white"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer class="footer bg-white text-dark">
      <q-toolbar class="column q-pa-none">
        <q-img
          src="https://assets-global.website-files.com/654c5f578cae1dae48ca94a1/65574e271e32ab415a28fe78_gravitycreation.svg"
          alt="Logo"
          :ratio="16 / 9"
          class="q-mb-lg"
          spinner-color="primary"
          spinner-size="82px"
          fit="contain"
          :width="$q.screen.gt.sm ? '228px' : '162px'"
          :height="$q.screen.gt.sm ? '70px' : '50px'"
        />
        <p class="text-body2 text-weight-regular text-center q-mb-lg">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and <br />
          praising pain was born and I will give.
        </p>

        <div class="row justify-center items-center text-capitalize q-mb-lg">
          <EssentialLink :essential-links="essentialLinksFooter" />
        </div>

        <p class="text-body2 text-weight-medium text-center">
          Designed by
          <a href="https://webestica.com/" target="_blank">Webestica</a>,
          Powered by <a href="https://webflow.com/" target="_blank">Webflow</a>
        </p>
      </q-toolbar>
    </footer>

    <q-page-sticky
      position="bottom-right"
      :offset="[16, 24]"
      v-if="$q.screen.lt.md"
    >
      <q-btn
        round
        class="bg-dark"
        text-color="white"
        padding="12px md"
        icon="shopping-cart-alt"
        aria-label="Cart"
      >
        <q-badge
          class="text-weight-bold shadow-3"
          color="grey-1"
          text-color="dark"
          floating
          rounded
        >
          4
        </q-badge>
      </q-btn>
    </q-page-sticky>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { EssentialLinkProps } from 'src/components/models';
import EssentialLink from 'components/EssentialLink.vue';

const essentialLinksHeader: EssentialLinkProps[] = [
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
    title: 'Contact',
    link: 'fdf',
  },
];

const essentialLinksFooter: EssentialLinkProps[] = [
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
    link: 'Faqs',
  },
  {
    title: 'Contact',
    link: 'fdf',
  },
  {
    title: 'Privacy Policy',
    link: 'fdf',
  },
  {
    title: 'Licenses',
    link: 'Licenses',
  },
];

const leftDrawerOpen = ref<boolean>(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style scoped lang="scss">
.toolbar {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.footer {
  max-width: 900px;
  padding: 80px 30px 40px 30px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: $breakpoint-md-max) {
  .footer {
    padding: 80px 16px 40px 16px;
  }
}
</style>
