<template>
  <q-page class="q-px-md">
    <HeroCard :hero-card="heroCard" />

    <div class="blog__container q-mx-auto q-px-md">
      <div class="blog__content">
        <a class="blog__card" href="https://lookiero.es/blog/" target="_blank">
          <div class="blog__card--image-content q-mb-lg">
            <q-img
              src="https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shirts"
              loading="eager"
              class="blog__card--image"
              fit="cover"
              spinner-color="dark"
              spinner-size="82px"
              height="305px"
            />
          </div>
          <h2 class="text-h6 text-weight-bold q-mt-none q-mb-lg">
            Insights and behind stories
          </h2>
        </a>
        <a class="blog__card" href="https://lookiero.es/blog/" target="_blank">
          <div class="blog__card--image-content q-mb-lg">
            <q-img
              src="https://images.unsplash.com/photo-1561053720-76cd73ff22c3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Elegant Shirts"
              loading="eager"
              class="blog__card--image"
              fit="cover"
              spinner-color="dark"
              spinner-size="82px"
              height="305px"
            />
          </div>
          <h2 class="text-h6 text-weight-bold q-mt-none q-mb-lg">
            Your business operations
          </h2>
        </a>
        <a class="blog__card" href="https://lookiero.es/blog/" target="_blank">
          <div class="blog__card--image-content q-mb-lg">
            <q-img
              src="https://images.unsplash.com/photo-1485809052957-5113b0ff51af?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Clothes and Accessories"
              loading="eager"
              class="blog__card--image"
              fit="cover"
              spinner-color="dark"
              spinner-size="82px"
              height="305px"
            />
          </div>
          <h2 class="text-h6 text-weight-bold q-mt-none q-mb-lg">
            Collaborative efforts of agencies
          </h2>
        </a>
        <a class="blog__card" href="https://lookiero.es/blog/" target="_blank">
          <div class="blog__card--image-content q-mb-lg">
            <q-img
              src="https://images.unsplash.com/photo-1553629823-085a8071fe28?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Man with clothes in London"
              loading="eager"
              class="blog__card--image"
              fit="cover"
              spinner-color="dark"
              spinner-size="82px"
              height="305px"
            />
          </div>
          <h2 class="text-h6 text-weight-bold q-mt-none q-mb-lg">
            Discovering the best Art
          </h2>
        </a>
        <a class="blog__card" href="https://lookiero.es/blog/" target="_blank">
          <div class="blog__card--image-content q-mb-lg">
            <q-img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="clothing Store"
              loading="eager"
              class="blog__card--image"
              fit="cover"
              spinner-color="dark"
              spinner-size="82px"
              height="305px"
            />
          </div>
          <h2 class="text-h6 text-weight-bold q-mt-none q-mb-lg">
            Inside the success & design process
          </h2>
        </a>
        <a class="blog__card" href="https://lookiero.es/blog/" target="_blank">
          <div class="blog__card--image-content q-mb-lg">
            <q-img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="shopping Woman"
              loading="eager"
              class="blog__card--image"
              fit="cover"
              spinner-color="dark"
              spinner-size="82px"
              height="305px"
            />
          </div>
          <h2 class="text-h6 text-weight-bold q-mt-none q-mb-lg">
            Best Experiences and Sightseeing.
          </h2>
        </a>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import HeroCard from 'src/components/HeroCard.vue';
import { HeroCardProps } from 'src/components/models';

const heroCard: HeroCardProps = {
  title: 'Our blog',
};
</script>

<style scoped lang="scss">
.blog__container {
  max-width: 1200px;
  padding: 80px 0 0 0;
}

.blog__content {
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
}

.blog__card--image-content {
  overflow: hidden;
  max-height: auto;
  border-radius: 10px;
}

.blog__card--image {
  border-radius: 10px;
  transition: transform 0.4s ease-in-out;
}

.blog__card:hover .blog__card--image {
  transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
}

@media (max-width: $breakpoint-sm-max) {
  .blog__content {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: $breakpoint-xs-max) {
  .blog__content {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: 1fr;
  }
}
</style>
