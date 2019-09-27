<template>
  <div>
      <Item 
      v-for="(item,index) in list" 
      :key="index" 
      :img="item.img" 
      @click.native="goDetail(item)"
      :classname="'right'">
          <template>
              <h3>{{item.title}}</h3>
              <p>描述</p>
              <p>价格：{{item.price}}</p>
          </template>
      </Item>
  </div>
</template>

<script>
import '@/mock/index.js'
import Item from '@/components/item.vue';
import axios from 'axios'
export default {
    data(){
        return{
            list:[]
        }
    },
    components:{
        Item
    },
    created() {
        axios.get('/api/list').then((res)=>{
            console.log(res.data.list);
            this.list = res.data.list;
        });
    },
    methods: {
        goDetail(item){
            console.log('goDetail');
            this.$router.push({path:'/detail',query:item})
        }
    },
}
</script>

<style>

</style>