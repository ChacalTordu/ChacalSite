import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import * as VueRouter from 'vue-router';

import Home from './pages/home.vue';
import Players from './pages/players.vue';

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
    }
  ]
})

const app = createApp(App)
app.use(router).mount('#app')
app.mount('app')

