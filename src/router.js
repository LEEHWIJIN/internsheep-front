import Vue from 'vue'
import Router from 'vue-router'

import Resume from './components/Resume/Index.vue'
import Login from './components/Login/Index.vue'
import Home from './components/Home/Index.vue'
import Apply from './components/ApplyList/Index.vue'
import Reportreview from './components/ReportReview/Index.vue'
import Applystatus from './components/ApplyStatus/Index.vue'
import SignUp from './components/SignUp/Index.vue'

Vue.use(Router)

function loggedin(to, from, next) {
    if(!localStorage.token){
      alert('로그인 하세요')
      next('/')
    }
    else{
      next();
    }
  }
  function login(to, from, next) {
    if(localStorage.token){
      next('/home')
    }
    else{
      next();
    }
  }

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
            path: '/signup',
            name: 'SignUp',
            component: SignUp,
            //beforeEnter: login
        },
        // {
        //     path: '/',
        //     name: 'login',
        //     component: Login,
        //     beforeEnter: login
        //   },
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