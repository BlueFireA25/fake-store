<template>
  <q-page class="q-px-md">
    <div class="home__hero q-mx-auto">
      <div class="hero__content">
        <h1
          :class="{
            'text-weight-bold text-dark q-mt-none q-mb-md': true,
            'text-h3': $q.screen.gt.xs,
            'text-h4': $q.screen.lt.sm,
          }"
        >
          Made for every <br />
          day, for everyone.
        </h1>
        <p class="text-subtitle2 text-weight-medium text-dark q-mb-lg">
          As seen on our best fashion catwalks
        </p>
        <q-btn
          label="Shop Now"
          class="text-subtitle1 text-weight-medium"
          color="dark"
          text-color="white"
          padding="10px 30px"
          no-caps
          :to="{ name: 'Shop' }"
        />
      </div>
    </div>

    <div class="home__container q-mx-auto">
      <h2
        :class="{
          'text-weight-bold text-dark q-mt-none q-mb-md text-center q-mb-xl': true,
          'text-h4': $q.screen.gt.xs,
          'text-h5': $q.screen.lt.sm,
        }"
      >
        Best Products
      </h2>
      <BestProducts :products="products" />

      <div class="hero__card q-mx-auto">
        <q-tab-panels
          v-model="brandsTabs"
          animated
          swipeable
          transition-prev="jump-up"
          transition-next="jump-up"
          class="full-width"
        >
          <q-tab-panel name="vertrio" class="bg-grey-1">
            <p
              :class="{
                'text-weight-medium text-dark text-center q-mt-md q-mb-lg': true,
                'text-h5': $q.screen.gt.sm,
                'text-h6': $q.screen.lt.md,
              }"
            >
              Step into a world of timeless elegance at Fashion Haven, where
              curated collections showcase the latest trends and classic styles.
            </p>
          </q-tab-panel>

          <q-tab-panel name="happenz" class="bg-grey-1">
            <p
              :class="{
                'text-weight-medium text-dark text-center q-mt-md q-mb-lg': true,
                'text-h5': $q.screen.gt.sm,
                'text-h6': $q.screen.lt.md,
              }"
            >
              Embrace the urban vibe at Urban Threads, your go-to destination
              for streetwear and urban fashion.
            </p>
          </q-tab-panel>

          <q-tab-panel name="katerio" class="bg-grey-1">
            <p
              :class="{
                'text-weight-medium text-dark text-center q-mt-md q-mb-lg': true,
                'text-h5': $q.screen.gt.sm,
                'text-h6': $q.screen.lt.md,
              }"
            >
              Discover your bohemian spirit at Boho Bliss Boutique, where
              free-spirited fashion meets artistic expression.
            </p>
          </q-tab-panel>

          <q-tab-panel name="Qugrey" class="bg-grey-1">
            <p
              :class="{
                'text-weight-medium text-dark text-center q-mt-md q-mb-lg': true,
                'text-h5': $q.screen.gt.sm,
                'text-h6': $q.screen.lt.md,
              }"
            >
              Elevate your sporty style at Sports Elite Outfitters, where
              performance meets fashion. From activewear essentials to the
              latest sports fashion trends.
            </p>
          </q-tab-panel>
        </q-tab-panels>

        <q-tabs
          v-model="brandsTabs"
          indicator-color="transparent"
          left-icon="angle-left"
          right-icon="angle-right"
          active-class="brand__logo--active"
        >
          <q-tab name="vertrio" class="brand__logo">
            <template v-slot:default>
              <q-img
                src="https://assets-global.website-files.com/654c5f578cae1dae48ca94a1/654da83fbd187659d9b0c954_client-01.svg"
                alt="Logo vertrio"
                loading="lazy"
                :ratio="16 / 9"
                spinner-color="primary"
                spinner-size="82px"
                fit="contain"
                width="200px"
                height="25px"
              />
            </template>
          </q-tab>
          <q-tab name="happenz" class="brand__logo">
            <template v-slot:default>
              <q-img
                src="https://assets-global.website-files.com/654c5f578cae1dae48ca94a1/654da83fbd187659d9b0c956_client-02.svg"
                alt="Logo happenz"
                loading="lazy"
                :ratio="16 / 9"
                spinner-color="primary"
                spinner-size="82px"
                fit="contain"
                width="200px"
                height="25px"
              />
            </template>
          </q-tab>
          <q-tab name="katerio" class="brand__logo">
            <template v-slot:default>
              <q-img
                src="https://assets-global.website-files.com/654c5f578cae1dae48ca94a1/654da83fbd187659d9b0c957_client-03.svg"
                alt="Logo katerio"
                loading="lazy"
                :ratio="16 / 9"
                spinner-color="primary"
                spinner-size="82px"
                fit="contain"
                width="200px"
                height="25px"
              />
            </template>
          </q-tab>
          <q-tab name="Qugrey" class="brand__logo">
            <template v-slot:default>
              <q-img
                src="https://assets-global.website-files.com/654c5f578cae1dae48ca94a1/654da83fbd187659d9b0c955_client-04.svg"
                alt="Logo Qugrey"
                loading="lazy"
                :ratio="16 / 9"
                spinner-color="primary"
                spinner-size="82px"
                fit="contain"
                width="200px"
                height="25px"
              />
            </template>
          </q-tab>
        </q-tabs>
      </div>

      <div>
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="dark"
          padding
          thumbnails
          :height="$q.screen.lt.sm ? '550px' : '500px'"
          class="text-dark"
          autoplay
        >
          <q-carousel-slide
            :name="review.name"
            class="column no-wrap flex-center"
            v-for="review in reviews"
            :key="review.name"
            :img-src="review.image"
          >
            <div class="column items-center review__container shadow-2 q-pa-lg">
              <q-avatar size="40px" class="overlapping">
                <img :src="review.image" alt="Client 1" />
              </q-avatar>
              <h2 class="text-h6 text-weight-medium text-dark q-my-md">
                {{ review.name }}
              </h2>
              <p
                class="text-body1 text-weight-regular text-dark q-mb-lg text-center"
              >
                {{ review.opinion }}
              </p>
              <q-rating
                v-bind:model-value="review.score"
                max="5"
                size="2em"
                color="yellow-8"
                icon="favorite"
                icon-half="uis uis-star-half-alt"
                icon-selected="uis uis-favorite"
                readonly
              />
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { productStore } from 'src/stores/products';
import BestProducts from 'src/components/ProductList.vue';

const productStoreInstance = productStore();
const products = computed(() => {
  const bestProducts = productStoreInstance.$state.filter((prod) => {
    if (prod.rating.rate >= 4.3) return prod;
  });

  return bestProducts;
});

const slide = ref<string>('Tatiana Echeverria');
const reviews = [
  {
    name: 'Tatiana Echeverria',
    image: 'https://cdn.quasar.dev/img/avatar1.jpg',
    opinion:
      'My experience at Nebula Store was nothing short of amazing! The curated collections are like a constellation of fashion.',
    score: 4.5,
  },
  {
    name: 'Maria Prado Singh',
    image: 'https://cdn.quasar.dev/img/avatar2.jpg',
    opinion:
      'Embrace the cosmic vibe at Nebula Store, your go-to destination for urban chic and cutting-edge fashion. My online order from arrived promptly,',
    score: 5,
  },
  {
    name: 'Martin Ochoa',
    image: 'https://cdn.quasar.dev/img/avatar4.jpg',
    opinion:
      'Discover blissful fashion at Nebula Store, where ethereal dresses and eclectic accessories create a dreamy bohemian escape.',
    score: 4,
  },
  {
    name: 'Daniela Borras',
    image: 'https://cdn.quasar.dev/img/avatar3.jpg',
    opinion:
      'Nebula Store is a game-changer for activewear enthusiasts like me! The stylish yet functional activewear exceeded my expectations',
    score: 3,
  },
];
const brandsTabs = ref<string>('vertrio');

const setActiveReviewAlt = (): void => {
  const reviewActive: HTMLCollectionOf<Element> =
    document.getElementsByClassName('q-carousel__thumbnail--active');

  if (reviewActive.length > 0) {
    for (const review of reviewActive) {
      review.setAttribute('alt', 'Review active');
    }
  }
};

const setInactivesReviewsAlt = (): void => {
  const reviewInactive: HTMLCollectionOf<Element> =
    document.getElementsByClassName('q-carousel__thumbnail--inactive');

  if (reviewInactive.length > 0) {
    for (const review of reviewInactive) {
      review.setAttribute('alt', 'Review inactive');
    }
  }
};

onMounted(() => {
  setActiveReviewAlt();
  setInactivesReviewsAlt();
});
</script>

<style scoped lang="scss">
.home__hero {
  max-width: 1200px;
  border-radius: 10px;
  background-image: url(../assets/home-background.webp);
  background-position: 0 0;
  background-size: auto;
  padding: 100px 80px;
}

.hero__content {
  h1 {
    line-height: 1.3em;
  }
}

.home__container {
  max-width: 1200px;
  padding: 80px 0 0 0;
}

.review__container {
  max-width: 500px;
  border-radius: 10px;
  transition: transform 0.4s ease-in-out;
}

.review__container:hover {
  transform: scale(1.02);
}

.brand__logo {
  border-radius: 10px;
  opacity: 0.3;
  transition: opacity 0.4s ease-in-out;
}

.brand__logo:hover,
.brand__logo--active {
  opacity: 1;
}

@media (max-width: $breakpoint-xs-max) {
  .home__hero {
    background-position: 33%;
    background-size: cover;
  }
}
</style>
