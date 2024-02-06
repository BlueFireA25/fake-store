import { ref } from 'vue';

export const loggedUser = ref<UserLogin | null>();

export interface UserLogin {
  username: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
}

export interface Name {
  firstname: string;
  lastname: string;
}

export interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: Geolocation;
}

export interface Geolocation {
  lat: string;
  long: string;
}
