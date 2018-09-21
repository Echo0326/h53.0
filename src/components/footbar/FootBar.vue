<template>
  <tabbar>
    <tabbar-item selected link="/">
      <img slot="icon"  src="./images/home.png">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item show-dot link="/store">
      <img slot="icon" src="./images/store.png">
      <span slot="label">找房</span>
    </tabbar-item>
    <tabbar-item show-dot link="/release">
      <img slot="icon" src="./images/release.png">
    </tabbar-item>
    <tabbar-item show-dot link="/help">
      <img slot="icon" src="./images/help.png">
      <span slot="label">邻助</span>
    </tabbar-item>
    <tabbar-item badge="2" link="/me">
      <img slot="icon" src="./images/me.png">
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    name: "FootBar",
    components:{
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>

</style>
