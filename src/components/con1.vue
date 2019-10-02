<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-29 15:40:38
 * @LastEditTime: 2019-08-15 19:07:40
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="con1">
    {{name}}
    <div class="groupid"
         @click="onLoad">
      list页获取异步接口数据{{user.groupId}}
    </div>
    <con2 v-bind="$attrs"
          v-on="$listeners"></con2>
  </div>
</template>

<script>
import con2 from './con2'
import { getGroupId } from '@/api/service'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      msg: 'con1',
      user: {}
    }
  },
  inheritAttrs: false,
  props: ['name'],
  components: {
    con2
  },
  mounted () { },
  methods: {
    ...mapActions({
      groupData: 'detail/groupData'
    }),
    onLoad () {
      getGroupId({
        appSource: 'secoo',
        sku: 52606943,
        source: 1,
        upk: '18210001657400782F74E3AB7FD929AED59F0415135D5665089292C437542835ED117B6D94EBB9CC36B4A5D49D3504B36E3795727824DF877ED0633F6DCDF88DA0D3355E9ACD2A0B2F892115DF6D2755F3297F5E93659937491D26B687A507A85A74C272F7C69FB28536BD6B31EDC482F8B979377EA3A749C8BC'
      }).then(res => {
        this.user = Object.assign({}, this.user, res)
        this.groupData(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/style/reset.scss';
html,
body,
#app {
  width: 100%;
  background: #fff;
}
#app {
  position: relative;
}
* {
  padding: 0;
  margin: 0;
}
.a {
  font-size: 40px;
}
.b {
  font-family: 'AlternateGothicEF-NoTwo';
  font-size: 40px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  width: 220px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 26px;
}
.groupid {
  width: 100%;
  height: 50px;
  background-color: #df8613;
  line-height: 50px;
  text-align: center;
  font-size: 26px;
  margin: 20px 0;
}
.list1 {
  width: 746px;
  height: 2500px;
  background-color: red;
  border: 2px solid #000;
}
</style>
