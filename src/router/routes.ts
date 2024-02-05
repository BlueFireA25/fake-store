import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('pages/AboutPage.vue'),
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('pages/BlogPage.vue'),
      },
      {
        path: 'faqs',
        name: 'Faqs',
        component: () => import('pages/FaqsPage.vue'),
      },
      {
        path: 'privacy-policy',
        name: 'Privacy Policy',
        component: () => import('pages/PrivacyPolicy.vue'),
      },
      {
        path: 'licenses',
        name: 'Licenses',
        component: () => import('pages/LicensesPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
