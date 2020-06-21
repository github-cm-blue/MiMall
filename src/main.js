import Vue from 'vue'
import qs from 'qs'
import VueCookie from 'vue-cookie'
import VueLazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui'

import router from './router/index'
import request from './utils/request'
import store from './store/index'

import App from './App.vue'

//import 与 require 的区别 ： import编译加载  require是运行时加载（如果不运行是不会加载的）
const mock=false;//定义一个开关，决定是否要使用假数据（mock会拦截 ajax请求）
if(mock){
  require('./mock/api')
}

Vue.use(ElementUI);
Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.prototype.request=request//将axios封装到request后，挂载到vue属性上
Vue.prototype.qs=qs

Vue.config.productionTip = false //生产环境的提示

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
