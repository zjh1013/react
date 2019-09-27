import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shoplist:[]
  },
  getters:{ //获取数据的，跟.vue文件里面的computed一样
    getlist(state,getters){
      return state.shoplist
    },
    getPrice(state,getters){
      state.shoplist.reduce((prev,cur)=>{
        return prev + cur.count * cur.price;
      },0);
    }
  },
  mutations: {
    //添加购物车
    addShop(state,obj){
      let ind = state.shoplist.findIndex(item => item.id === obj.id); // 
      console.log(ind);
      if(ind === -1){
        // obj.count = 1;
        state.shoplist.push(obj);
      } else {
        obj.count ++;
      }
    },
    //加
    changeCount(state,obj){
      state.shoplist[obj.index].count = obj.count;
    }
  },
  actions: {

  }
})
