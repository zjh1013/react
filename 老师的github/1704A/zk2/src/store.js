import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods:[]
  },
  getters:{
    getlist(state,getters){
      return state.goods;
    },
    getPrice(state,getters){
      let sum = 0;
      state.goods.forEach(item => {
          sum += item.foods.reduce((prev,cur) => prev + cur.count * cur.price,0)
      })
      return sum;
    },
    getCount(state,getters){
      let sum = 0;
      state.goods.forEach(item => {
          sum += item.foods.reduce((prev,cur) => prev + cur.count ,0)
      })
      return sum;
    }
  },
  mutations: {
    addShop(state,list){
      state.goods = list;
    },
    changeCount(state,obj){
      console.log(obj);
      state.goods[obj.index].foods[obj.index1].count = obj.count;
    }
  },
  actions: {
   async getShop({commit}){
      let res = await axios.get('/api/shop');
      res.data.goods.forEach(item => {
        item.foods.map(item1 => item1.count = 0)
      })
      console.log(res);
      commit('addShop',res.data.goods);
    }
  }
})
