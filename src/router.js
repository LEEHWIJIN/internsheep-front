import Vue from 'vue'
import Router from 'vue-router'

import Resume from './components/Resume/Index.vue'
import Login from './components/Login/Index.vue'
import Home from './components/Home/Index.vue'
import Apply from './components/ApplyList/Index.vue'
import Reportreview from './components/ReportReview/Index.vue'
import Applystatus from './components/ApplyStatus/Index.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/resume',
            name: 'Resume',
            component: Resume,
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
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
        },
        {
            path: '/apply',
            name: 'Apply',
            component : Apply,
        },
        {
            path: '/reportreview',
            name: 'Reportreview',
            component : Reportreview,
        },
        {
            path: '/apply-status',
            name: 'Applystatus',
            component : Applystatus,
        },
        
    ]
})