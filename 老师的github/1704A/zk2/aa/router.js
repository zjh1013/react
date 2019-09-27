import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/dican',
      component: ()=>import('./views/Home.vue'),
      children:[
        {
          path:'dican',
          name:'dican',
          component: ()=>import('./views/dican.vue'),

        },
        {
          path:'comment',
          name:'comment',
          component: ()=>import('./views/comment.vue'),

        },
        {
          path:'bussi',
          name:'bussi',
          component: ()=>import('./views/bussi.vue'),

        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
