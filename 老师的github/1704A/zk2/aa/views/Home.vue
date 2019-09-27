<template>
  <div class="home">
    <div class="title">头部</div>
    <ul>
      <router-link to="/dican" tag="li"> 点餐</router-link>
      <router-link to="/comment" tag="li">评价</router-link>
      <router-link to="/bussi" tag="li">商家</router-link>
    </ul>

    <router-view></router-view>
    <footer>
      <span>总价:{{getPrice}}</span>
      <span>总数</span>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import {mapGetters} from 'vuex';
export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(['getPrice'])
  },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
.title {
  height: 44px;
  width: 100%;
  text-align: center;
}
ul {
  height: 44px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
}
ul li {
  flex: 1;
  text-align: center;
  line-height: 44px;
}

footer {
  height: 50px;
  width: 100%;
  border-top: 1px solid #ccc;
}
.router-link-active{
  color: red;
}
</style>