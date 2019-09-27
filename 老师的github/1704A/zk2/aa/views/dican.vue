<template>
  <div class="dican">
    <div class="left">
      <ul>
        <li
          v-for="(item, index) in getList"
          :key="index"
          @click="goToRight(index)"
          :class="{ 'active': index === ind }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="right">
      <div ref="rightlist">
        <my-list
          v-for="(item, index) in getList"
          :key="index"
          :name="item.name"
          :index="index"
          :foods="item.foods"
        ></my-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BScroll from "better-scroll";
import "@/mock/index.js";
import myList from "@/components/list.vue";
import {mapActions,mapGetters} from 'vuex';
export default {
  data() {
    return {
      // getList: [],
      ind: 0,
      scrollH: [],
      scrollY: 0,
      leftBScroll: null,
      rightBScroll: null
    };
  },
  components: {
    myList
  },
  async created() {
    // axios.get("/api/shop").then(res => {
    //   console.log(res);
    //   this.goods = res.data.goods;
    // });
    await this.getShop();
    console.log(this.getList);
    this.init();
    this.scrollHeight();
    
  },
  mounted() {
    
  },
  computed: {
    ...mapGetters(['getList']),
    currentIndex() {
      for (let j = 0; j < this.scrollH.length; j++) {
        let height1 = this.scrollH[j];
        let height2 = this.scrollH[j + 1];
        if (height2 && (this.scrollY >= height1 && this.scrollY < height2)) {
          //   this.ind = j;
          return j;
        }
      }
      return 0;
    }
  },
  methods: {
    ...mapActions(['getShop']),
    init() {
      this.leftBScroll = new BScroll(".left", {
        click: true
      });
      this.rightBScroll = new BScroll(".right", {
        click:true,
        probeType: 3
      });
      this.rightBScroll.on("scroll", res => {
        // console.log(Math.abs(res.y),this.currentIndex);
        this.scrollY = Math.abs(res.y);
        this.ind = this.currentIndex;
      });
    },
    goToRight(ind) {
      this.ind = ind;
      console.log(ind);
      let children = this.$refs.rightlist.children;
      this.rightBScroll.scrollToElement(children[ind], 200);
    },
    scrollHeight() {
      let height = 0;
      let children = this.$refs.rightlist.children;
      this.scrollH.push(height);
      for (let i = 0; i < children.length; i++) {
        height += children[i].offsetHeight;
        this.scrollH.push(height);
      }
      console.log(this.scrollH);
    }
  }
};
</script>

<style scoped>
.dican {
  flex: 1;
  display: flex;
  overflow: hidden;
}
.left {
  width: 120px;
  height: 100%;
  overflow: hidden;
  border-right: 1px solid #ccc;
}
.left li {
  height: 44px;
  width: 100%;
  line-height: 44px;
  text-align: center;
}
.left li.active {
  background: red;
  color: #fff;
}
.right {
  flex: 1;
  overflow: hidden;
  height: 100%;
}
</style>