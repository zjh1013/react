<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgUrl" :key="index">
          <img :src="item.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        imgUrl:{
            type:Array,
            default:()=>{
                return [
                    {
                        img:"http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg"
                    },
                    {
                        img:"http://pic1.win4000.com/wallpaper/c/53cdd1f7c1f21.jpg"
                    },
                    {
                        img:"http://pic25.nipic.com/20121112/9252150_150552938000_2.jpg"
                    }
                ]
            }
        }
    }
};
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