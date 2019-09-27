<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <h3 @click="show(item)">{{ item.title }}</h3>
      <list :list="item.children" v-show="item.children && item.isShow"></list>
    </li>
  </ul>
</template>

<script>
export default {
  name:'list',
  data() {
    return {
      title: ""
    };
  },
  props: {
    list: {
      type: Array
    }
  },
  created() {
    console.log(this);
  },
  methods: {
      show(obj){
          obj.isShow = !obj.isShow;
      }
  },
};
</script>

<style>
</style>>