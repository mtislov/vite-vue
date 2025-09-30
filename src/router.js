import {createRouter, createWebHistory} from 'vue-router'

import MainView from "./views/MainView.vue";
import SecondView from "./views/SecondView.vue";
import ThirdView from "./views/ThirdView.vue";

const routes = [
    { path: '/', component: MainView, name: 'main' },
    { path: '/2', component: SecondView, },
    { path: '/3', component: ThirdView, },

]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})