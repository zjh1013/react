<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <img :src="require('@/assets/'+item.image)" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import axios from 'axios'
import '@/mock/index'
import Swiper from 'swiper'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
    banner:[]
    }
  },
  created() {
    this.$http('/api/banner').then((res)=>{
      console.log(res);
      this.banner = res.data.list;
      this.$nextTick(()=>{
        new Swiper('.swiper-container');
      })
    });
  },
}
</script>

<style scoped>
  .swiper-container{
    height: 200px;
    width: 100%;
  }
  .swiper-wrapper,.swiper-slide,img{
    height: 100%;
    width: 100%;
  }
</style>
