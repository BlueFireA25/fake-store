<template>
  <q-page class="q-px-md">
    <HeroCard :hero-card="heroCard" />

    <div class="container q-mx-auto q-px-md">
      <div class="q-mb-xl">
        <h2
          :class="{
            'text-weight-bold q-mt-none q-mb-lg': true,
            'text-h4': $q.screen.gt.xs,
            'text-h5': $q.screen.lt.sm,
          }"
        >
          Collecting Personal Information
        </h2>
        <div class="text-body2 text-weight-regular text-dark">
          <p class="q-mt-none q-mb-md">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
          <ul class="q-mt-none q-mb-md">
            <li>
              There are many variations of passages of Lorem Ipsum available.
            </li>
            <li>Iusto odio dignissimos ducimus qui blanditiis.</li>
            <li>Praesentium voluptatum deleniti atque.</li>
            <li>Quas molestias excepturi sint occaecati.</li>
          </ul>
          <p class="q-my-none">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </div>
      </div>

      <div>
        <h2
          :class="{
            'text-weight-bold q-mt-none q-mb-lg': true,
            'text-h4': $q.screen.gt.xs,
            'text-h5': $q.screen.lt.sm,
          }"
        >
          Sharing Personal Information
        </h2>
        <div class="text-body2 text-weight-regular text-dark">
          <p class="q-mt-none q-mb-md">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing
            <span class="text-weight-bold">hidden in the middle of text.</span>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc. <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <ol class="q-mt-none q-mb-md">
            <li>Sometimes on purpose.</li>
            <li>Classical Latin literature from 45 BC.</li>
            <li>The Extremes of Good and Evil.</li>
            <li>This book is a treatise on the theory.</li>
          </ol>
          <p class="q-my-none">
            Combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import HeroCard from 'src/components/HeroCard.vue';
import { HeroCardProps } from 'src/components/models/general';

const heroCard: HeroCardProps = {
  title: 'Privacy Policy',
};
</script>
