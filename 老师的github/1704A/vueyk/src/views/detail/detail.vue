<template>
  <div>
      <Item :item="$route.query">
        <template v-slot:last>
          <h3 @click="goToBook($route.query)">书架</h3>
        </template>
      </Item>
      <!-- {{getList}} -->
  </div>
</template>

<script>
import Item from '@/components/item'
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'
export default {

  data() {
    return {
      
    }
  },
  computed: {
    ...mapState(['list']),
    ...mapGetters(['getList'])
  },
  components:{
    Item
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    ...mapMutations(['addBook']), //this.$store.commit(');
    // ...mapActions(['incremte']), //this.$store.dispatch();
    goToBook(obj){
      console.log('去书架');
      this.addBook(obj);
      this.$router.push({name:'book'})
    }
  },
}
</script>

<style>

</style>