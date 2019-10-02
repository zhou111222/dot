/* 使用vue-bus有两点需要注意，第一是 $bus.on应该在 created钩子内使用，如果在mounted使用，
它可能接受不到其他组件来自created钩子发出的事件；第二点是使用了$bus.on，在beforeDestroy
钩子里应该使用$bus.off解除，因为组件销毁后，就没必要把监听的句柄储存在vue-bus里了。 */

const install = function (Vue) {
  const Bus = new Vue({
    methods: {
      emit (event, ...args) {
        this.$emit(event, ...args)
      },
      on (event, callback) {
        this.$on(event, callback)
      },
      off (event, callback) {
        this.$off(event, callback)
      }
    }
  })
  Vue.prototype.$bus = Bus
}

export default install
