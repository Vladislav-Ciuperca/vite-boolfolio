import { createApp } from 'vue'
import './style.css'

import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';

import About from './pages/About.vue'

import Home from './pages/Home.vue'


const router = createRouter( {
    history: createWebHistory(),
    routes:[
        {path:'/',name:'Home', component:Home},
        {path:'/about',name:'About', component:About}
    ]
})

createApp(App)
.use(router)
.mount('#app')
