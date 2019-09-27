import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'swiper/dist/css/swiper.min.css'
Vue.config.productionTip = false

Vue.prototype.$http = axios;

// Vue.prototype.$bus = new Vue();

// Vue.compoent('',);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
