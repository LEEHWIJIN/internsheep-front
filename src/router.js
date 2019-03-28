import Vue from 'vue'
import Router from 'vue-router'

import Resume from './components/Resume/Index'
import Login from './components/Login/Index'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/resume',
            name: 'Resume',
            component: Resume,
            //component: ()=> import('./components/Resume/Index'),
            // meta: {
            //   permission: -1,
            //   restrict: false,
            // }
        },
        {
            path : '/login',
            name : 'login',
            component : Login,
        }
    ]
})