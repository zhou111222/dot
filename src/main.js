
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueBus from './assets/js/bus'
import { dot } from './assets/js/dot'
// 中央事件总线封装
Vue.use(VueBus)
Vue.config.productionTip = false
/* eslint-disable no-new */
// Vue.directive() 这个方法写在new Vue之前
dot.clickExpDot(Vue)
window.onload = function () {
  dot.postError()
  dot.dotPageReadyData()
  dot.show()
}
new Vue({
  el: '#app',
  router,
  store, // 使用store
  components: { App },
  template: '<App/>'
})
