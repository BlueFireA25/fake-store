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
     * @returns A promise that resolves to an array of users.
     * @throws Throws an error if there is an issue loading the users list.
     */
    async allUsers(): Promise<User[]> {
      try {
        const response = await api.get('/users?limit=5');
        const users = response.data as User[];
        this.$state = users;

        return users;
      } catch (error) {
        Notify.create({
          icon: 'exclamation-triangle',
          type: 'negative',
          message: 'Error loading Users list',
          position: 'bottom-left',
          progress: true,
          timeout: 2000,
          classes: 'text-weight-medium',
          textColor: 'white',
        });

        throw new Error('Error loading Users list');
      }
    },

    /**
     * Fetches a single user asynchronously from the API based on the provided userId.
     *
     * @param userId - The unique identifier of the user.
     * @returns A promise that resolves to a user object.
     * @throws Throws an error if there is an issue loading the user.
     */
    async singleUser(userId: string): Promise<User> {
      try {
        const response = await api.get(`/users/${userId}`);
        const user = response.data as User;

        return user;
      } catch (error) {
        Notify.create({
          icon: 'exclamation-triangle',
          type: 'negative',
          message: 'Error loading User',
          position: 'bottom-left',
          progress: true,
          timeout: 2000,
          classes: 'text-weight-medium',
          textColor: 'white',
        });

        throw new Error('Error loading User');
      }
    },

    /**
     * Performs user login asynchronously by sending a POST request to the authentication endpoint.
     *
     * @param userLogin - The user login credentials.
     * @returns A promise that resolves to an authentication token.
     * @throws Throws an error if there is an issue loading in the login.
     */
    async userLogin(userLogin: UserLogin): Promise<string> {
      try {
        const response = await api.post('/auth/login', userLogin);
        const token = response.data as string;

        return token;
      } catch (error) {
        Notify.create({
          icon: 'exclamation-triangle',
          type: 'negative',
          message: 'Error in Login',
          position: 'bottom-left',
          progress: true,
          timeout: 2000,
          classes: 'text-weight-medium',
          textColor: 'white',
        });

        throw new Error('Error in Login');
      }
    },
  },
});
