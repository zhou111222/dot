import * as types from '../mutation-type'

const state = { // 要设置的全局访问的state对象
  carNumber: 0
}

const getters = {
  carNum (state) {
    return state.carNumber
  }
}

const mutations = {
  [types.INIT_CAR_NUM] (state, num) {
    state.carNumber = num
  },
  [types.ADD_CAR_NUM] (state) {
    state.carNumber = state.carNumber + 1
  },
  [types.REDUCE_CAR_NUM] (state) {
    if (state.carNumber > 0) {
      state.carNumber = state.carNumber - 1
    }
  }
}

const actions = {
  getCarNum (context, num) {
    context.commit(types.INIT_CAR_NUM, num)
  }
}

export default {
  namespaced: true, // 用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
