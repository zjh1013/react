<template>
  <div>
      <List :list="list"/>
  </div>
</template>

<script>
import List from '@/components/list'
import '@/mock/index'
export default {
  data() {
    return {
      list:[]
    }
  },
  components:{
    List
  },
  created() {
    this.$http.get('/api/title').then((res)=>{
        console.log(res.data.list);
        this.list = res.data.list;
    });
  },
} 
</script>

<style>

</style>