/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-29 11:11:44
 * @LastEditTime: 2019-08-15 19:16:04
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
// 直出页面,js在主包中
import Dot from '@/page/Dot'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Dot',
    component: Dot
  },
  {
    path: '/dot',
    name: 'Dot',
    component: Dot
  }
  ]
})
