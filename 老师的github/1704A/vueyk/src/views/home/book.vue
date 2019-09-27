<template>
  <div>
      <Item v-for="(item,index) in getList" :key="index" :item="item.obj">
        <!-- {{item}} -->
        <template v-slot:last>
          <p>6666</p>
        </template>
      </Item>
  </div>
</template>

<script>
import Item from '@/components/item'
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters(['getList'])
  },
  components:{
    Item
  },
  created() {
    // console.log(this.$route);
  },
}
</script>

<style>

</style>