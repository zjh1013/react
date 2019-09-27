<template>
  <div>
    <ul class="list">
      <li
        v-for="(item, index) in titleArr"
        :class="{ active: index === ind }"
        @click="change(index)"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
    <div>
      <Item v-for="(item, index) in newlist" :key="index" :item="item" url="detail">
        <template v-slot:last>
          <!-- <p>{{grade}}</p> -->
          <p>{{item.description}}</p>
        </template>
      </Item>
    </div>
  </div>
</template>

<script>
import "@/mock/index";
import Item from "@/components/item";
export default {
  name:'classify',
  data() {
    return {
      titleArr: ["热门", "新书", "免费", "完本"],
      ind: 0,
      list: {},
      newlist: []
    };
  },
  computed: {
    
  },
  components: {
    Item
  },
  methods: {
    change(ind) {
      this.ind = ind;
      this.newlist = this.list["ranklist" + ind];
    }
  },
  created() {
    this.$http.get("/api/list").then(res => {
      console.log(res.data.list);
      this.list = res.data.list;
      this.newlist = res.data.list["ranklist" + this.ind];
    });
  }
};
</script>

<style scoped>
.list {
  height: 44px;
  width: 100%;
  display: flex;
  padding: 5px 10px;
  box-sizing: border-box;
}
.list li {
  flex: 1;
  margin: 0 5px;
  line-height: 36px;
  height: 36px;
  text-align: center;
  background: #f2f2f2;
  color: #4c4c4c;
  border-radius: 5px;
}
.list li.active {
  background: #ff4544;
  color: #fff;
}
</style>