import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './views/MainPage.vue';
import AboutPage from './views/AboutPage.vue';
import CarDetailsPage from './views/CarDetailsPage.vue';

export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainPage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/car-details/:_id',
            name: 'carDetails',
            component: CarDetailsPage,
        },
    ]
})