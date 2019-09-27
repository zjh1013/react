<template>
  <div>
    <h3>{{ name }}</h3>
    <dl v-for="(item, index1) in foods" :key="index1">
      <dt>
        <img :src="item.image" alt="" />
      </dt>
      <dd>
        <h3>{{ item.name }}</h3>
        <h3>{{ item.price }}</h3>
        <template v-if="item.count">
          <span @click="changeCount({index,index1,count:item.count-1})">-</span>
          <span>{{item.count}}</span>
        </template>
        <span @click="changeCount({index,index1,count:item.count+1})">+</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props: {
    name: String,
    index:Number,
    foods: Array
  },
  methods:{
    ...mapMutations(['changeCount'])
  }
};
</script>

<style scoped>
dl {
  display: flex;
}
dl dt {
  height: 120px;
  width: 120px;
}
dl dt img {
  height: 100%;
  width: 100%;
}
dl dd {
  flex: 1;
}
</style>