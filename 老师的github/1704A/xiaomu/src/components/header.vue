<template>
  <header>
      <span v-if="back">&lt;</span>
      <div>
          <slot></slot>
      </div>
  </header>
</template>

<script>
export default {
    props:{
        back:Boolean
    }
}
</script>

<style scoped>
header{
    height: 44px;
    width: 100%;
    display: flex;
    padding: 0 10px;
    box-sizing: border-box;
    background: #ccc;
    align-items: center;
}
header div{
    flex: 1;
    display: flex;
}
header div p{
    flex: 1;
    text-align: center;
}
header div span{
    display: inline-block;
    /* width: 80px;
    text-align: center; */
}
</style>