<template>
  <q-page class="q-px-md">
    <HeroCard :hero-card="heroCard" />

    <div class="container q-mx-auto q-px-md">
      <h2
        :class="{
          'contact__container--title text-dark text-weight-bold q-mt-none q-mb-xl': true,
          'text-h4': $q.screen.gt.xs,
          'text-h5': $q.screen.lt.sm,
        }"
      >
        You may also fill out the form below and we will respond as quickly as
        possible.
      </h2>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-mt-xl">
        <div>
          <q-input
            class="q-mb-lg"
            color="dark"
            outlined
            label="Name"
            label-color="dark"
            v-model="name"
            :rules="[(val) => !!val || 'Field is required']"
          />
          <q-input
            class="q-mb-lg"
            color="dark"
            outlined
            label="Email"
            label-color="dark"
            type="email"
            v-model="email"
            :rules="[(val) => !!val || 'Field is required']"
          />
          <q-input
            class="q-mb-lg"
            color="dark"
            outlined
            label="Message"
            label-color="dark"
            type="textarea"
            v-model="message"
            :rules="[(val) => !!val || 'Field is required']"
          />
        </div>

        <div>
          <q-btn
            label="Send"
            :loading="submitting"
            type="submit"
            class="text-subtitle1 text-weight-medium"
            color="dark"
            text-color="white"
            padding="10px 30px"
            no-caps
          >
            <template v-slot:loading>
              <q-spinner-dots color="white"
            /></template>
          </q-btn>
          <q-btn
            label="Reset"
            type="reset"
            class="q-ml-sm text-subtitle1 text-weight-medium"
            color="dark"
            flat
            padding="10px 30px"
            no-caps
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { HeroCardProps } from 'src/components/models/general';
import HeroCard from 'src/components/HeroCard.vue';

const $q = useQuasar();
const heroCard: HeroCardProps = {
  title: 'Contact us',
  description:
    'For press related inquiries, please get in touch via <a href="mailto:example@domain.com">example@domain.com</a> <br><br> Call us: <a href="tel:+26547851245">+1 987 234 7654</a> <br><br> Visit store: 389 Helen Lane Brooklyn, NY 11204',
  socials: [
    {
      icon: 'facebook',
      link: 'https://facebook.com',
    },
    {
      icon: 'instagram',
      link: 'https://www.instagram.com',
    },
    {
      icon: 'twitter',
      link: 'https://twitter.com',
    },
  ],
};

const name = ref<string>('');
const email = ref<string>('');
const message = ref<string>('');
const submitting = ref(false);

/**
 * Submits a form, sets a flag to indicate submission ('submitting'), and displays a notification after a 2-second delay.
 */
const onSubmit = (): void => {
  submitting.value = true;

  setTimeout(() => {
    $q.notify({
      type: 'positive',
      position: 'bottom-left',
      progress: true,
      timeout: 2000,
      message: 'Message sent',
      icon: 'envelope-check',
      classes: 'text-weight-medium',
      textColor: 'white',
    });

    submitting.value = false;
  }, 2000);
};

/**
 * Resets the values of input fields to empty strings.
 */
const onReset = (): void => {
  name.value = '';
  email.value = '';
  message.value = '';
};
</script>

<style scoped lang="scss">
.contact__container--title {
  text-wrap: pretty;
}
</style>
