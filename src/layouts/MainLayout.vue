<template>
  <q-layout view="lhh lpr lff">
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
          <q-btn
            flat
            round
            color="dark"
            icon="user-circle"
            v-if="$q.screen.gt.sm"
          >
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

                <div class="column items-center" v-if="loggedUser">
                  <q-avatar size="72px">
                    <q-img
                      src="https://cdn.quasar.dev/img/avatar4.jpg"
                      alt="User"
                      spinner-color="dark"
                      spinner-size="50px"
                    />
                  </q-avatar>

                  <div class="text-subtitle1 text-dark q-mt-sm q-mb-xs">
                    {{ loggedUser.username }}
                  </div>

                  <q-btn
                    color="dark"
                    text-color="white"
                    label="Logout"
                    push
                    size="sm"
                    @click="logout"
                    v-close-popup
                  />
                </div>
                <div class="column justify-center items-center" v-else>
                  <q-btn
                    class="q-mb-md"
                    color="dark"
                    text-color="white"
                    label="Sign in"
                    push
                    no-caps
                    size="sm"
                    :to="{ name: 'Login' }"
                    v-close-popup
                  />
                  <q-btn
                    color="dark"
                    text-color="dark"
                    label="Sign up"
                    push
                    no-caps
                    outline
                    size="sm"
                    disable
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
            @click="openShoppingCart"
          >
            <q-badge
              class="text-weight-bold shadow-3"
              color="grey-1"
              text-color="dark"
              floating
              rounded
            >
              {{ cart }}
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

        <q-btn flat round color="dark" icon="user-circle">
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

              <div class="column items-center" v-if="loggedUser">
                <q-avatar size="72px">
                  <q-img
                    src="https://cdn.quasar.dev/img/avatar4.jpg"
                    alt="User"
                    spinner-color="dark"
                    spinner-size="50px"
                  />
                </q-avatar>

                <div class="text-subtitle1 text-dark q-mt-sm q-mb-xs">
                  {{ loggedUser.username }}
                </div>

                <q-btn
                  color="dark"
                  text-color="white"
                  label="Logout"
                  push
                  size="sm"
                  @click="logout"
                  v-close-popup
                />
              </div>
              <div class="column justify-center items-center" v-else>
                <q-btn
                  class="q-mb-md"
                  color="dark"
                  text-color="white"
                  label="Sign in"
                  push
                  no-caps
                  size="sm"
                  :to="{ name: 'Login' }"
                  v-close-popup
                />
                <q-btn
                  color="dark"
                  text-color="dark"
                  label="Sign up"
                  push
                  no-caps
                  outline
                  size="sm"
                  disable
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
        @click="openShoppingCart"
      >
        <q-badge
          class="text-weight-bold shadow-3"
          color="grey-1"
          text-color="dark"
          floating
          rounded
        >
          {{ cart }}
        </q-badge>
      </q-btn>
    </q-page-sticky>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { EssentialLinkProps } from 'src/components/models/general';
import { loggedUser } from 'src/components/models/user';
import EssentialLink from 'src/components/EssentialLink.vue';
import ShoppingCart from 'src/components/ShoppingCart.vue';
import { cartStore } from 'src/stores/cart';
import { userStore } from 'src/stores/user';

const $q = useQuasar();
const router = useRouter();
const userStoreInstance = userStore();
const cartStoreInstance = cartStore();
const cart = computed(() => {
  if (cartStoreInstance.$state.products) {
    const totalProducts = cartStoreInstance.$state.products.reduce(
      (total, product) => total + product.quantity,
      0
    );

    return totalProducts;
  }
  return 0;
});

const essentialLinksHeader: EssentialLinkProps[] = [
  {
    title: 'Home',
    link: 'Home',
  },
  {
    title: 'Shop',
    link: 'Shop',
  },
  {
    title: 'About',
    link: 'About',
  },
  {
    title: 'Blog',
    link: 'Blog',
  },
  {
    title: 'Contact',
    link: 'Contact',
  },
];
const essentialLinksFooter: EssentialLinkProps[] = [
  {
    title: 'Home',
    link: 'Home',
  },
  {
    title: 'Shop',
    link: 'Shop',
  },
  {
    title: 'About',
    link: 'About',
  },
  {
    title: 'Blog',
    link: 'Blog',
  },
  {
    title: 'FAQs',
    link: 'Faqs',
  },
  {
    title: 'Contact',
    link: 'Contact',
  },
  {
    title: 'Privacy Policy',
    link: 'Privacy Policy',
  },
  {
    title: 'Licenses',
    link: 'Licenses',
  },
];

const leftDrawerOpen = ref<boolean>(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const openShoppingCart = () => {
  $q.dialog({
    component: ShoppingCart,
  });
};

const logout = (): void => {
  loggedUser.value = null;
  window.localStorage.removeItem('user');

  // Delete userId Cart
  cartStoreInstance.updateCart();

  router.push({ name: 'Login' });
};

onMounted(() => {
  cartStoreInstance.addCart();
  userStoreInstance.allUsers().then((response) => {
    if (response) {
      const userFromStorage = window.localStorage.getItem('user');

      if (userFromStorage) {
        loggedUser.value = JSON.parse(userFromStorage);

        // Add userId Cart
        const user = response.find(
          (user) => user.username === loggedUser.value?.username
        );
        cartStoreInstance.updateCart(user);
      }
    }
  });
});
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
