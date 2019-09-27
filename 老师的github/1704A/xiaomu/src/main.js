import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Message,DatePicker} from 'element-ui'
import vSwiper from '@/components/v-swiper'
import Header from '@/components/header'
import 'swiper/dist/css/swiper.min.css'
//全局注册
Vue.component('vSwiper',vSwiper);
Vue.component('Header',Header);

Vue.config.productionTip = false
Vue.prototype.$message = Message

Vue.use(DatePicker)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
