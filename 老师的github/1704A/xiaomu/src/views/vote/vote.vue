<template>
  <div class="vote">
    <Header :back="true">
      <template>
        <p>投票</p>
        <span @click="goToCreateVote">发起投票</span>
      </template>
    </Header>
    <tab-bar :titleArr="titleArr" :callback="changeColor">
      <Item
        v-for="(item, index) in newlist"
        :key="index"
        :classname="'right'"
        :img="item.img || 'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg'"
      >
        <template>
          <div>
            <h3>{{ item.title }}</h3>
            <h3>{{ item.endTime }}</h3>
          </div>
          <div>
            <h3>描述</h3>
            <h3>{{ item.isSingle ? "多选" : "单选" }}</h3>
          </div>
        </template>
      </Item>
    </tab-bar>
    <!-- <div class="votetitle">
      <ul>
        <li
          v-for="(item, index) in titleArr"
          :key="index"
          :class="{ active: index === ind }"
          @click="changeColor(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="votecontent">
      <div>
        <Item
          v-for="(item, index) in newlist"
          :key="index"
          :title="item.title"
          :endTime="item.endTime"
          :isSingle="item.isSingle"
        />
      </div>
    </div> -->
  </div>
</template>

<script>
// import httpAxios from '@/utils/http.js'
import { allVote } from "@/api/api.js";
import Item from "@/components/item";
import BScroll from "better-scroll";
import TabBar from "@/components/tabbar.vue";
export default {
  data() {
    return {
      titleArr: ["全部1", "已结束", "正在进行"],
      ind: 0,
      list: [],
      newlist: []
    };
  },
  components: {
    Item,
    TabBar
  },
  created() {
    allVote().then(res => {
      console.log(res);
      this.list = res;
      this.newlist = res;
    });
    this.$nextTick(() => {
      new BScroll(".votecontent");
    });
  },
  methods: {
    changeColor(ind) {
      //点击
      //   this.ind = ind;
      let time = new Date().getTime();
      console.log(time);
      this.newlist =
        ind === 0
          ? this.list
          : this.list.filter(item => {
              return ind === 1
                ? new Date(item.endTime).getTime() < time
                : new Date(item.endTime).getTime() > time;
            });
      //   console
    },
    goToCreateVote() {
      this.$router.push({ path: "/createvote" });
    }
  }
};
</script>

<style scoped>
.vote {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>