export const toast = {
  data () {
    return {
      name: 'hello'
    }
  },
  mounted () {
    this.sayHello()
  },
  methods: {
    sayHello: function () {
      console.log('say mixin')
    }
  }
}
