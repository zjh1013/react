<template>
  <div>
        <Item v-for="(item,index) in getlist" :key="index" :img="item.img">
            <template>
                <h3>{{item.title}}</h3>
                <p>价格：{{item.price}}</p>
                <div>
                    <span @click="changeCount({index,count:item.count-1})">-</span>
                    <span>{{item.count}}</span>
                    <span @click="changeCount({index,count:item.count+1})">+</span>
                </div>
            </template>
        </Item>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import Item from '@/components/item.vue'
export default {
    data() {
        return {
            
        }
    },
    components:{
        Item
    },
    computed: {
        ...mapGetters(['getlist'])
    },
    methods: {
        ...mapMutations(['changeCount'])
    },
}
</script>

<style>

</style>