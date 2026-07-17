import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AvaliarView from '../views/AvaliarView.vue'
import RankingView from '../views/RankingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/avaliar',
      name: 'avaliar',
      component: AvaliarView,
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: RankingView,
    },
  ],
})

export default router
