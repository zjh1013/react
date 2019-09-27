import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index',
      name: 'index',
      component: ()=> import('./views/home/index.vue'),
      children:[
        {
          path:'home',
          name:'home',
          meta:{
            required:false,
            keepAlive:false,
            title:"首页"
          },
          component:()=> import('./views/home/home.vue')
        },
        {
          path:'classify',
          name:'classify',
          meta:{
            required:false,
            keepAlive:true,
            title:"分类"
          },
          component:()=> import('./views/home/classify.vue')
        },
        {
          path:'ranking',
          name:'ranking',
          meta:{
            required:false,
            keepAlive:false,
            title:"排行"
          },
          component:()=> import('./views/home/ranking.vue')
        },
        {
          path:'book',
          name:'book',
          meta:{
            required:true,
            keepAlive:false,
            title:"书架"
          },
          component:()=> import('./views/home/book.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/login/login.vue')
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:()=>import('./views/detail/detail.vue')
    },
    {
      path:'/',
      redirect:'/index/home'
    }
  ]
})

// const login = ['book','classify']
router.beforeEach((to,from,next)=>{
  if(to.matched.some(item => item.meta.required)){ //需要守卫
      const user = window.localStorage.userId ;
      console.log(to);
      if(user){ //登录
          next();
      } else {
        next({
          path:'/login',
          query:{redirect:to.fullPath}
        });
      }
  } else {
    next();
  }
})


router.afterEach((to,from)=>{
  console.log(to.meta.title);
  if(to.meta && to.meta.title){
    document.title = to.meta.title;
  } else {
    document.title = '1704A'
  }
})

export default router;