import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: () => import('pages/HomePage.vue'), // SSR
      },
      {
        path: 'about-me',
        component: () => import('pages/AboutPage.vue'), // SSR
      },
      {
        path: 'store',
        component: () => import('pages/StorePage.vue'), // SSR
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'), // CSR
    children: [
      {
        path: '/page1',
        name: 'PageOne',
        component: () => import('pages/admin/PageOne.vue'),
      },
      {
        path: '/page2',
        name: 'PageTwo',
        component: () => import('pages/admin/PageTwo.vue'),
      },
      {
        path: '/page3',
        name: 'PageThree',
        component: () => import('pages/admin/PageThree.vue'),
      },
    ],
  },
];

export default routes;
