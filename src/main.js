/*
* 入口js
*/
import Vue from 'vue'
import 'babel-polyfill'


import App from './App'
import router from './router'
import store from './store/index'
import filters from './filters/filters'
import utils from '../static/utils/utils'
import {BASE_LOCATION_WEB} from '../src/api/base.root.config'


//配置页面的title
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

//百度统计
router.afterEach(( to, from, next ) => {
  setTimeout(()=>{
    let _hmt = _hmt || [];
    (function() {
      //每次执行前，先移除上次插入的代码
      document.getElementById('baidu_tj') && document.getElementById('baidu_tj').parentNode.removeChild(document.getElementById('baidu_tj'))
      let hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?b605ba9e714c71c29ee3842b8e865694"
      hm.id = "baidu_tj"
      let s = document.getElementsByTagName("script")[0]
      s.parentNode.insertBefore(hm, s)
    })();
  },50);
} );

//加载全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

//注册vue全局使用方法,重定向到web
Vue.prototype.redirectToweb=function () {
  if (!utils.checkMobile()){
    window.location.href=BASE_LOCATION_WEB+this.$route.fullPath
  }
}

//创建vue对象
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store,
})

