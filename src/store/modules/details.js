import * as types from '../mutation-type'

const state = { // 要设置的全局访问的state对象
  gold: 'BALLY/巴利',
  num: 1,
  groupData: {}
}

const getters = {
  getProductdNum (state) {
    return state.num
  },
  getGroupData (state) {
    return state.groupData
  }
}

const mutations = {
  [types.ADD_NUMBER] (state, sum) {
    state.num = state.num + sum
  },
  [types.GET_GROUP_DATA] (state, data) {
    state.groupData = Object.assign({}, state.groupData, data)
  }
}

const actions = {
  getNewNum (context, num) {
    context.commit(types.ADD_NUMBER, num)
  },
  groupData (context, data) {
    context.commit(types.GET_GROUP_DATA, data)
  }
}

export default {
  namespaced: true, // 用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
