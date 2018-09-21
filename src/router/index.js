/*
* 路由器对象模块
* */

import Vue from 'vue'
import VueRouter from 'vue-router'
//路由模块
import Home from '../pages/home/Home'
import Store from '../pages/store/Store'
import Release from '../pages/release/Release'
import Help from '../pages/help/Help'
import Me from '../pages/me/Me'
import Empty from '../pages/empty/Empty'

//声明使用路由
Vue.use(VueRouter);

export default new VueRouter({
  //配置路由
  mode: 'history',
  routes:[
    {
      path:'/',
      component:Home,
      meta:{
        title:"主页"
      }
    },
    {
      path:'/store',
      component:Store,
      meta:{
        title:"找房"
      }
    },
    {
      path:'/release',
      component:Release,
      meta:{
        title:"发布"
      }
    },
    {
      path:'/help',
      component:Help,
      meta:{
        title:"邻助"
      }
    },
    {
      path:'/me',
      component:Me,
      meta:{
        title:"我的"
      }
    },
    {
      path:'/home',
      component:Home,
      meta:{
        title:"主页"
      }
    },
    {
      path:'/empty',
      component:Empty,
      meta: {
        title: '找不到页面'
      }
    },
    {
      path:'*',
      redirect:'/empty',
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
