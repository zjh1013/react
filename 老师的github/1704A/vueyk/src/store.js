import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  getters:{ //对state里面的数据派生出来一些新数据的时候
    getList(state,getters){
      return state.list;
    }
    // getPeople(state,getters){ 
    //     return state.list.fileter(item => item.grade > 30)
    // },
    // getLength(state,getters){
    //   return getters.getPeople().length;
    // }
  },
  mutations: {
     addBook(state,obj){
        state.list.push({obj})
     }
  },
  actions: {
    // incremte({commit}){
    //   axios.get('/api/lits').then((res)=>{
    //     commit('add',res.data.list)
    //   });
    // }
  }
})
