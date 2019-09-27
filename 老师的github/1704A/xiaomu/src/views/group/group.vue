<template>
  <div class="group">
      <Header :back="true">
          <template>
              <input type="text" placeholder="小组">
          </template>
      </Header>
      <div class="grouplist">
          <Item v-for="(item,index) in list" :key="index" :img="item.groupIcon" :classname="'top'">
              <template>
                  <h3>{{item.groupName}}</h3>
              </template>
          </Item>
      </div>
  </div>
</template>

<script>
import Item from '@/components/item.vue'
import {grouplist} from '@/api/api.js'
export default {
    data() {
        return {
            list:[]
        }
    },
    components:{
        Item
    },
    created() {
        this.init();
    },
    methods: {
        async init(){
            let res = await grouplist();
            console.log(res);
            this.list = res.result;
            // this.list.map((item,index) => item.aa = '123')
        }
    },
}
</script>

<style scoped>
.group{
    width: 100%;
    height: 100%;
}
.grouplist{
    display: flex;
    overflow-x: auto;
    width: 100%;
}
.grouplist dl {
    flex: 1;
    margin: 0 5px;

}
</style>