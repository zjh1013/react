<template>
  <dl @click="goToDetail(item)">
       <dt>
          <img :src="item.coverUrl" alt="">
      </dt>
      <dd>
          <h3>{{item.bookName}}</h3>
          <p>作者:{{item.authorName}}</p>
          <p>更新:{{item.updteChapterName}}</p>
          <slot name="last"></slot>
      </dd>
  </dl>
</template>

<script>
export default {
    props:{
        item:Object,
        url:''
    },
    methods: {
        goToDetail(item){
            if(this.url){
                console.log('item@@@@@@@');
                this.$router.push({name:'detail',params:{id:123},query:item});
            }
            console.log(this.$route);
        }
    },
    created() {
        console.log(this.item);
    },
}
</script>

<style scoped>
dl{
    width: 100%;
    display: flex;
    padding: 0 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
}
dl dt{
    height: 120px;
    width: 100px;
}
dl dt img{
    height: 100%;
    width: 100%;
}
dl dd{
    flex: 1;
}
</style>