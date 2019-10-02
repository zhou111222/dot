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
import Home from '@/page/Home'
// 按需加载页面，页面js独自打包
const Detail = r => require.ensure([], () => r(require('@/page/detail')), 'Detail')
const Dot = r => require.ensure([], () => r(require('@/page/dot')), 'Dot')
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/dot',
    name: 'Dot',
    component: Dot
  }
  ]
})
