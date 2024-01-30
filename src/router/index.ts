import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import MainPage from '../pages/MainPage.vue';
import FavoritesPage from '../pages/FavoritesPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainPage,
      meta: {
        layout: MainLayout
      }
    },

    {
      path: '/favorites',
      component: FavoritesPage,
      meta: {
        layout: MainLayout
      }
    },
  ],
});

export default router;
