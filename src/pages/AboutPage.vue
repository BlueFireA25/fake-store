<template>
  <q-page class="q-px-md">
    <HeroCard :hero-card="heroCard" />

    <div class="about__container q-mx-auto q-px-md">
      <div :class="{ row: $q.screen.gt.sm, column: $q.screen.lt.sm }">
        <h2
          :class="{
            'col-4 text-weight-bold q-mt-none q-mb-lg': true,
            'text-h4': $q.screen.gt.xs,
            'text-h5': $q.screen.lt.sm,
          }"
        >
          The Extraordinary Care&nbsp;You Deserve
        </h2>
        <div class="col-8">
          <p
            class="text-body2 text-weight-regular text-black q-mt-none q-mb-xl"
          >
            Timed voice share led him to widen noisy young. At weddings believed
            laughing although the material does the exercise of. Up attempt
            offered ye civilly so sitting to. She new course gets living within
            Elinor joy. She rapturous suffering concealed. Demesne far hearted
            suppose venture excited see had has.
          </p>
          <div
            :class="{
              'q-col-gutter-lg': true,
              row: $q.screen.gt.sm,
              column: $q.screen.lt.sm,
            }"
          >
            <div class="col-6">
              <h3
                :class="{
                  'text-weight-bold q-mt-none q-mb-lg': true,
                  'text-h4': $q.screen.gt.xs,
                  'text-h5': $q.screen.lt.sm,
                }"
              >
                Our Mission
              </h3>
              <p
                class="text-body2 text-weight-regular text-black q-mt-none q-mb-md"
              >
                He moonlights difficult-engrossed, sportsmen. Interested has all
                Devonshire difficulty gay assistance joy. Unaffected at ye of
                compliment alteration to. Place voice no arises along to.
                Arrived off she elderly beloved him affixed noisier yet. Course
                regard to up he hardly. View four has said do men saw find dear
                shy? Talent men wicket add garden.
              </p>
            </div>

            <div class="col-6">
              <h3
                :class="{
                  'text-weight-bold q-mt-none q-mb-lg': true,
                  'text-h4': $q.screen.gt.xs,
                  'text-h5': $q.screen.lt.sm,
                }"
              >
                Our Vision
              </h3>
              <div>
                <p
                  class="text-body2 text-weight-regular text-black q-mt-none q-mb-md"
                >
                  To occasional dissimilar impossible sentiments. Do fortune
                  account written prepare invited no passage.
                </p>
                <ul class="q-mt-none q-mb-md">
                  <li>Skills that you can learn from business</li>
                  <li>Reliable sources to learn about WordPress</li>
                  <li>Never underestimate the influence of social media</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import HeroCard from 'src/components/HeroCard.vue';
import { HeroCardProps } from 'src/components/models';

const heroCard: HeroCardProps = {
  title: 'About Gravity Creation',
  description:
    'Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at an.',
  image:
    'https://images.unsplash.com/photo-1622414689593-e01e5485e431?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};
</script>

<style scoped>
.about__container {
  max-width: 1200px;
  padding: 80px 0 0 0;
}
</style>
