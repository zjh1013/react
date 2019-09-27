<template>
  <div id="app" class="wrap_app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
#app,html,body {
  color: #2c3e50;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

</style>
