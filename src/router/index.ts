import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PropositoView from '../views/PropositoView.vue';
import MetodologiaView from '../views/MetodologiaView.vue';
import QuemSomosView from '../views/QuemSomosView.vue';
import ContatoView from '../views/ContatoView.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/proposito', name: 'Proposito', component: PropositoView },
  { path: '/metodologia', name: 'Metodologia', component: MetodologiaView },
  { path: '/quemsomos', name: 'QuemSomos', component: QuemSomosView },
  { path: '/contato', name: 'Contato', component: ContatoView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
