<template>
  <div class="q-px-md">
    <div class="login__container q-mx-auto q-px-md">
      <q-expansion-item
        class="bg-grey-1 text-subtitle1 text-weight-bold login__expansion shadow-1 q-mb-xl"
        icon="users-alt"
        expand-icon="angle-down"
        header-class="q-pr-none"
        dense
        dense-toggle
        v-if="$q.screen.lt.md"
        v-model="expanded"
      >
        <template v-slot:header>
          <div class="row items-center q-py-sm">
            <div class="circle q-mr-md"></div>
            <div class="row items-center">
              <q-icon
                class="q-mr-sm"
                name="users-alt"
                size="24px"
                color="dark"
              />
              <span>Available Users</span>
            </div>
          </div>
        </template>
        <q-card class="bg-grey-1 text-subtitle2 text-weight-regular shadow-1">
          <q-card-section>
            <div v-for="user in users" :key="user.id" class="q-pa-sm">
              <div class="row items-center q-mb-md q-col-gutter-x-sm">
                <div>
                  <q-btn
                    flat
                    color="dark"
                    icon="clipboard-blank"
                    @click="loginClipboard(user.username, user.password)"
                  />
                </div>
                <div>
                  <div>
                    <span class="text-weight-medium">Username:</span>
                    {{ user.username }}
                  </div>
                  <div>
                    <span class="text-weight-medium">Password:</span>
                    {{ user.password }}
                  </div>
                </div>
              </div>
              <q-separator inset class="full-width" color="gre-y1" />
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <h1
        :class="{
          'contact__container--title text-weight-bold q-mt-none q-mb-xl text-center': true,
          'text-h4': $q.screen.gt.xs,
          'text-h5': $q.screen.lt.sm,
        }"
      >
        Login
      </h1>

      <q-form @submit="onSubmit" class="q-gutter-lg q-mt-xl">
        <div>
          <q-input
            class="q-mb-lg"
            color="dark"
            outlined
            label="Name"
            label-color="dark"
            v-model="username"
            :rules="[(val) => !!val || 'Field is required']"
          />

          <q-input
            class="q-mb-sm"
            color="dark"
            outlined
            label="Password"
            label-color="dark"
            type="password"
            v-model="password"
            :rules="[(val) => !!val || 'Field is required']"
          />

          <router-link
            class="forgot-password text-subtitle2 text-weight-medium"
            :to="{ name: 'Login' }"
          >
            Forgot password?</router-link
          >
        </div>
        <div>
          <q-btn
            label="Sign in"
            :loading="submitting"
            type="submit"
            class="text-subtitle1 text-weight-medium full-width q-mb-lg"
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
            label="Sign up"
            class="q-ml-sm text-subtitle1 text-weight-medium full-width"
            color="dark"
            text-color="dark"
            outline
            padding="10px 30px"
            no-caps
            disable
          />
        </div>
      </q-form>
    </div>
  </div>

  <q-page-sticky
    class="z-top"
    position="top-left"
    :offset="[16, 24]"
    v-if="$q.screen.gt.sm"
  >
    <q-expansion-item
      class="bg-grey-1 text-subtitle1 text-weight-bold login__expansion shadow-1"
      icon="users-alt"
      expand-icon="angle-down"
      header-class="q-pr-none"
      dense
      dense-toggle
      v-model="expanded"
    >
      <template v-slot:header>
        <div class="row items-center q-py-sm">
          <div class="circle q-mr-md"></div>
          <div class="row items-center">
            <q-icon class="q-mr-sm" name="users-alt" size="24px" color="dark" />
            <span>Available Users</span>
          </div>
        </div>
      </template>
      <q-card class="bg-grey-1 text-subtitle2 text-weight-regular shadow-1">
        <q-card-section>
          <div v-for="user in users" :key="user.id" class="q-pa-sm">
            <div class="row items-center q-mb-md q-col-gutter-x-sm">
              <div>
                <q-btn
                  flat
                  color="dark"
                  icon="clipboard-blank"
                  @click="loginClipboard(user.username, user.password)"
                />
              </div>
              <div>
                <div>
                  <span class="text-weight-medium">Username:</span>
                  {{ user.username }}
                </div>
                <div>
                  <span class="text-weight-medium">Password:</span>
                  {{ user.password }}
                </div>
              </div>
            </div>
            <q-separator inset class="full-width" color="gre-y1" />
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-page-sticky>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { userStore } from 'src/stores/user';
import { UserLogin, loggedUser } from 'src/components/models/user';

const $q = useQuasar();
const router = useRouter();
const store = userStore();
const users = store.$state;

const username = ref<string>('');
const password = ref<string>('');
const submitting = ref(false);

const expanded = ref<boolean>(false);

/**
 * Handles the form submission by setting the submitting flag,
 * performing user login, and updating the UI accordingly.
 */
const onSubmit = (): void => {
  submitting.value = true;

  const userLogin: UserLogin = {
    username: username.value,
    password: password.value,
  };

  store
    .userLogin(userLogin)
    .then((response) => {
      if (response) {
        loggedUser.value = userLogin;
        router.push({ name: 'Home' });

        $q.notify({
          type: 'positive',
          position: 'bottom-left',
          progress: true,
          timeout: 2000,
          message: `Welcome ${userLogin.username}`,
          icon: 'smile-beam',
          classes: 'text-weight-medium',
          textColor: 'white',
        });
      }
    })
    .finally(() => (submitting.value = false));
};

/**
 * Populates the username and password fields with the provided values,
 * and collapses the available users.
 *
 * @param name - The username to be set.
 * @param userPassword - The password to be set.
 */
const loginClipboard = (name: string, userPassword: string): void => {
  username.value = name;
  password.value = userPassword;
  expanded.value = false;
};

/**
 * Executes the provided callback function when the component is mounted.
 * In this case, it triggers the retrieval of all users from the store.
 */
onMounted(() => {
  store.allUsers();
});
</script>

<style scoped lang="scss">
.login__container {
  max-width: 500px;
  padding: 80px 0;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login__expansion {
  border-radius: 10px;

  .q-card {
    border-radius: 10px;
  }
}

.circle {
  width: 15px;
  height: 15px;
  background-color: $positive;
  border-radius: 100%;
  box-shadow: 0px 0px 5px 2px $positive;
  animation: glow 1.5s linear infinite alternate;
}

@keyframes glow {
  to {
    box-shadow: 0px 0px 10px 5px $positive;
  }
}

@media (max-width: $breakpoint-sm-max) {
  .login__container {
    padding: 0 0 80px 0;
  }
}
</style>
