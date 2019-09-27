<template>
  <div>
      <!-- <div>{{$route.query}}</div> -->
      <button @click="goToShop($route.query)">购物车</button>
      {{getlist}}
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['getlist'])
    },
    methods: {
        ...mapMutations(['addShop']),
        goToShop(obj){
            console.log(this);
            this.addShop(obj);
            this.$router.push({path:'/shop'})

        }
    },
}
</script>

<style>

</style>