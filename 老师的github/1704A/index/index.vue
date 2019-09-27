<template>
    <div class="scroll" ref="scroll">
        <div class="aa">
            <div v-for="(item,index) in title" :key="index" class="bb">
                {{item.name}}
            </div>
            <div>上拉加载</div>
        </div>
    </div>
</template>

<script>
import Mock from "mockjs"
import bScroll from "better-scroll"

let list = Mock.mock({
    "list|30":[{
        name:"@name"
    }]
})

export default {
    data(){
        return {
            title:list.list
        }
    },
    mounted () {
        this.scroll = new bScroll(".scroll",{
            click: true,
            probeType: 2,
        })
        this.scroll.on("scroll",(e)=>{
            let y = e.y;
            let max = this.scroll.maxScrollY;
            console.log(y,max)
            if(y<max-20){
                this.title.push(list.list)
            }
        })
    }
}
</script>

<style>
    .scroll{
        width: 100%;
        height: 100%;
    }
    .bb{
        width: 100%;
        height: 30px;
        line-height: 30px;
    }
</style>