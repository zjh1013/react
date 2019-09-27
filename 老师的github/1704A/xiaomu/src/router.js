import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      meta:{
        required:true
      },
      component: () => import(/* webpackChunkName: "about" */ './views/home/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/login/login.vue')
    },
    {
      path: '/vote',
      name: 'vote',
      component: () => import(/* webpackChunkName: "about" */ './views/vote/vote.vue')
    },
    {
      path: '/createvote',
      name: 'createvote',
      component: () => import(/* webpackChunkName: "about" */ './views/vote/createvote.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/register/register.vue')
    },
    {
      path: '/group',
      name: 'group',
      component: () => import(/* webpackChunkName: "about" */ './views/group/group.vue')
    },
    {
      path: '/gift',
      name: 'gift',
      component: () => import(/* webpackChunkName: "about" */ './views/gift/gift.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import(/* webpackChunkName: "about" */ './views/gift/detail.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import(/* webpackChunkName: "about" */ './views/shop/shop.vue')
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})


router.beforeEach((to,from,next)=>{
  if(to.matched.some(item => item.meta.required)){ //需要守卫
    //是否登录
    const token = window.localStorage.token;
    if(!token){ //没登录
        next({
          path:'/login',
          query:{
            redirect:to.fullPath
          }
        });
    } else {
      next();
    }
  } else {
    next();
  }
})


export default router;