import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/user/login'
        },
        {
            path: '/user/login',
            name: 'login',
            component: Login
        }
    ]
})


export default router
