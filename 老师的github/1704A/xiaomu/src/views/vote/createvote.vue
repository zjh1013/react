<template>
  <div>
    <div>
      <span>标题</span>
      <input type="text" placeholder="" v-model="title"/>
    </div>
    <div>
      <span>标签</span>
      <input type="text" placeholder="请输入内容" v-model="info"/>
    </div>
    <div>
      <div class="list" v-for="(item,index) in chooseList" :key="index">{{item}}</div>
     
      <div>
        <input placeholder="添加" v-model="choose"/>
        <div @click="addChoose">+</div>
      </div>
    </div>
    <div>
      <span>是否单选</span>
      <select v-model="isSingle">
        <option value="0">单选</option>
        <option value="1">多选</option>
      </select>
    </div>
    <div>
      <span>是否匿名</span>
      <select v-model="anonymity">
        <option value="0">匿名</option>
        <option value="1">不匿名</option>
      </select>
    </div>
    <div>
      <span>截至时间</span>
      <el-date-picker 
      v-model="value1" 
      @change="changeTime"
      value-format="yyyy-MM-dd HH:mm"
      type="date" placeholder="选择日期">
      </el-date-picker>
    </div>
    <button @click="goTopublish">发布</button>
  </div>
</template>

<script>
import {newVote} from '@/api/api.js'
export default {
  data() {
    return {
      value1: "",
      title:"",
      info:"",
      chooseList:[],
      choose:"",
      isSingle:0,
      anonymity:1
    };
  },
  methods: {
    changeTime(){
        console.log(this.value1);
    },
    goTopublish(){
      newVote({
        title:this.title,
        userId:window.localStorage.userId *1,
        info:this.info,
        chooseList:this.chooseList,
        anonymity:this.anonymity * 1,
        isSingle:this.isSingle * 1,
        startTime: new Date(),
        endTime:this.value1
      }).then((res)=>{
        console.log(res);
        this.$router.push({path:'/vote'});
      })
    },
    addChoose(){
        this.chooseList.push(this.choose);
    }
  }
};
</script>

<style>
</style>