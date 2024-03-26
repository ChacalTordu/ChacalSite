import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import * as VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import Players from './pages/Players.vue';
import Ranking from './pages/Ranking.vue';
import NewSession from './pages/NewSession.vue';
import LogIn from '@/pages/user/Login.vue';
import Register from '@/pages/user/Register.vue';
import Bracket from '@/pages/Bracket.vue';

const router = VueRouter.createRouter({
history: VueRouter.createWebHistory(),
routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/players',
      name: 'Players',
      component: Players
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/newSession',
      name: 'NewSession',
      component: NewSession
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/bracket',
      name: 'Bracket',
      component: Bracket
    }
  ]
})

const app = createApp(App)
app.use(router).mount('#app')
app.mount('app')

