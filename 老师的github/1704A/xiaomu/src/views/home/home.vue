<template>
  <div>
      <Header :back="false">
        <p>小沐首页</p>
      </Header>
      <v-swiper :imgUrl="list"></v-swiper>
      <div @click="goToVote">投票</div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  data() {
    return {
      list:[{
        img:"http://pic33.nipic.com/20131007/13639685_123501617185_2.jpg"
      },{
        img:"http://pic26.nipic.com/20121221/9252150_142515375000_2.jpg"
      },{
        img:"http://pic26.nipic.com/20130121/9252150_101440518391_2.jpg"
      }]
    }
  },
  created() {
    this.$nextTick(()=>{
      new Swiper('.swiper-container');
    })
  },
  methods: {
    goToVote(){
      //去投票
      this.$router.push({path:'/vote'})
    }
  },
}
</script>

<style>

</style>