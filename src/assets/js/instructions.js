const color = function (Vue) {
  Vue.directive('color', {
    inserted: function (el, binding, vnode) {
      console.log('color', binding.value)
      el.style.color = binding.value.color
    },
    update: function (el, binding, vnode) {
      el.style.color = binding.value
    }
  })
}

export {
  color
}
