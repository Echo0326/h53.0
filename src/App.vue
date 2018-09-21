<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>


<script>
  export default {
    name:"App"
  }
</script>


<style lang="less">
  @import url('../static/css/common.less');
  html,body{
      font-size: 0.28rem;
      color: #000000;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
