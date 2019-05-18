import Vue from 'vue'
import Router from 'vue-router'

import Resume from './components/Resume/Index.vue'
import Login from './components/Login/Index.vue'
import Home from './components/Home/Index.vue'
import Apply from './components/ApplyList/Index.vue'
import Report from './components/Report/Index.vue'
import Review from './components/Review/Index.vue'
import Applystatus from './components/ApplyStatus/Index.vue'
import SignUp from './components/SignUp/Index.vue'
import Admin from './components/Admin/Index.vue'
import Modify from './components/Admin/modify.vue'
import ReadResume from './components/ReadResume/Index.vue'
import Profile from './components/Profile/Index.vue'

Vue.use(Router)

function loggedin(to, from, next) {
    if(!localStorage.token){
      alert('로그인 하세요')
      next('/login')
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
            path: '/',
            name: 'root',
            component: ()=> import('./components/Home/Index.vue'),
        },
        {
            path: '/resume',
            name: 'Resume',
            component: Resume,
            //beforeEnter : loggedin,
        },
        {
            path: '/readResume',
            name: 'ReadResume',
            component: ReadResume,
            //beforeEnter : loggedin,
        },
        {
            path: '/profile',
            name: 'Profile',
            component : Profile,
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            beforeEnter: loggedin,
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
            beforeEnter: login
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp,
            beforeEnter: login
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
            path: '/report',
            name: 'Report',
            component : Report,
        },
        {
            path: '/review',
            name: 'Review',
            component : Review,
        },
        {
            path: '/apply-status',
            name: 'Applystatus',
            component : Applystatus,
        },
        {
            path : '/admin',
            name : 'Admin',
            component : Admin,
        },{
            path : '/admin/modify',
            name : 'modify',
            component : Modify,
        },

    ]
})
