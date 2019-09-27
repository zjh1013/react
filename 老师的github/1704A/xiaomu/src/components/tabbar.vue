<template>
    <div class="tabbar">
    <div class="votetitle">
      <ul>
        <li
          v-for="(item, index) in titleArr"
          :key="index"
          :class="{ active: index === ind }"
          @click="changeInd(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="votecontent">
      <div>
          <slot></slot>
        <!-- <Item
          v-for="(item, index) in newlist"
          :key="index"
          :title="item.title"
          :endTime="item.endTime"
          :isSingle="item.isSingle"
        /> -->
      </div>
    </div>
    </div>
</template>

<script>
export default {
    props:{
        titleArr:{
            type:Array,
            default:()=>{
                return ["全部", "已结束", "正在进行"]
            }
        },
        callback:{
            type:Function
        }
    },
    data() {
        return {
            ind:0
        }
    },
    methods: {
        changeInd(ind){
            this.ind = ind;
            this.callback(ind);
        }
    },
};
</script>

<style scoped>
.tabbar{
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.votetitle {
  display: flex;
  justify-content: center;
}
.votetitle ul {
  display: flex;
  height: 36px;
  align-items: center;
}
.votetitle ul li {
  padding: 0 5px;
  box-sizing: border-box;
}
.votetitle ul li.active {
  /* background: red; */
  color: red;
}
.votecontent {
  flex: 1;
  overflow: hidden;
}
</style>