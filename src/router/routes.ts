import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/HomePage.vue'), // SSR
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('pages/AboutPage.vue'), // SSR
      },
      {
        path: 'misseuph',
        name: 'misseuph',
        component: () => import('pages/MissEuphPage.vue'), // SSR
      },
      {
        path: 'shakespeare',
        name: 'shakespeare',
        component: () => import('pages/ShakespearePage.vue'), // SSR
      },
      {
        path: 'abenteuermusikkappelle',
        name: 'abenteuermusikkappelle',
        component: () => import('pages/AbenteuerMusikkappellePage.vue'), // SSR
      },
      {
        path: 'klangtraum',
        name: 'klangtraum',
        component: () => import('pages/KlangtraumPage.vue'), // SSR
      },
      {
        path: 'shop',
        name: 'shop',
        component: () => import('pages/ShopPage.vue'), // SSR
      },
      {
        path: 'medien',
        name: 'medien',
        component: () => import('pages/GalleryPage.vue'), // SSR
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('pages/ContactPage.vue'), // SSR
      },
      {
        path: 'bestellen',
        name: 'bestellen',
        component: () => import('pages/BestellenPage.vue'), // SSR
      },
      {
        path: 'samples',
        name: 'audiosamples',
        component: () => import('pages/AudioSamplePage.vue'), // SSR
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
