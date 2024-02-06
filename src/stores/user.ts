import { defineStore } from 'pinia';
import { Notify } from 'quasar';
import { api } from 'src/boot/axios';
import { UserLogin, User } from 'src/components/models/user';

function defaultState(): User[] {
  return [];
}

export const userStore = defineStore('users', {
  state: () => defaultState(),

  actions: {
    /**
     * Fetches all users asynchronously from the API.
     *
     * @returns A promise that resolves to an array of users or undefined in case of an error.
     */
    async allUsers(): Promise<User[] | undefined> {
      try {
        const response = await api.get('/users?limit=5');
        const users = response.data as User[];
        this.$state = users;

        return users;
      } catch (error) {
        Notify.create({
          icon: 'warning',
          type: 'negative',
          message: 'Error loading Users list.',
          timeout: 2000,
        });
      }
    },

    /**
     * Fetches a single user asynchronously from the API based on the provided userId.
     *
     * @param userId - The unique identifier of the user.
     * @returns A promise that resolves to a user object or undefined in case of an error.
     */
    async singleUser(userId: string): Promise<User | undefined> {
      try {
        const response = await api.get(`/users/${userId}`);
        const user = response.data as User;

        return user;
      } catch (error) {
        Notify.create({
          icon: 'warning',
          type: 'negative',
          message: 'Error loading User.',
          timeout: 2000,
        });
      }
    },

    /**
     * Performs user login asynchronously by sending a POST request to the authentication endpoint.
     *
     * @param userLogin - The user login credentials.
     * @returns A promise that resolves to an authentication token or undefined in case of an error.
     */
    async userLogin(userLogin: UserLogin): Promise<string | undefined> {
      try {
        const response = await api.post('/auth/login', userLogin);
        const token = response.data as string;

        return token;
      } catch (error) {
        Notify.create({
          icon: 'warning',
          type: 'negative',
          message: 'Error in Login.',
          timeout: 2000,
        });
      }
    },
  },
});
