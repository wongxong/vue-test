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
            path: '/home',
            name: 'home',
            component: Home,
            alias: '/'
        },
        {
            path: '/user/login',
            name: 'login',
            component: Login
        }
    ]
})

router.beforeEach((to, from, next) => {
    let loginStatus = localStorage.getItem('loginStatus')
    if(!loginStatus && to.path.indexOf('/user/') < 0){
        next('/user/login');
        return
    }
    next()
})

export default router
