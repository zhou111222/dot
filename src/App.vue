<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-29 11:11:44
 * @LastEditTime: 2019-07-29 11:11:44
 * @LastEditors: your name
 -->
<template>
  <div id="app">
    <img src="./assets/logo.png" class="aa">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
