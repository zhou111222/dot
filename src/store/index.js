import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import detail from './modules/details'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    detail
  }
})
