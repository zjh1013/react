<template>
  <div>
      <ul class="list">
        <router-link to="/index/home" tag="li">首页</router-link>
        <router-link to="/index/classify" tag="li">分类</router-link>
        <router-link to="/index/ranking" tag="li">排行</router-link>
        <router-link to="/index/book" tag="li">书架</router-link>
      </ul>
      <!-- <keep-alive include="classify"> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {

}
</script>
<style scoped>
.list{
  height: 44px;
  width: 100%;
  display: flex;
  background: #333;
  color: #f2f2f2;

}
.list li{
  flex: 1;
  line-height: 44px;
  text-align: center;
}
.router-link-active{

  background: #454545;
}
</style>
