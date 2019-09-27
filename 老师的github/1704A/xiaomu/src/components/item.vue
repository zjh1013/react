<template>
  <dl :class="classname">
    <dt>
      <img :src="img" alt="" />
    </dt>
    <dd>
      <slot></slot>
      <!-- <div>
        <h3>{{title}}</h3>
        <h3>{{endTime}}</h3>
      </div>
      <div>
        <h3>描述</h3>
        <h3>{{isSingle ? '多选' : '单选'}}</h3>
      </div> -->
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    img:{
      type:String
    },
    classname:{
      type:String
    }
  }
};
</script>

<style scoped>
dl.right {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding:  5px 0;
  box-sizing: border-box;
}
dl dt {
  height: 120px;
  width: 100px;
}

dl dt img {
  height: 100%;
  width: 100%;
}
dl dd {
  flex: 1;
}
dl dd div {
  display: flex;
  padding: 0 10px;
  box-sizing: border-box;
  justify-content: space-between;
}
</style>