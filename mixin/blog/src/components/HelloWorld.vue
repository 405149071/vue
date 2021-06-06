<template>
  <div class="hello">
    afa
    {{this.num}}
  </div>
</template>

<script>
import { myMixin } from '@/assets/mixin.js'
/**
 * 1. 变量
 * 2. methods ，混合后，同名的由组件中的覆盖
 * 3. 生命周期钩子，先执行mixin，再执行组件中的
 */
export default {
  name: 'HelloWorld',
  mixins: [myMixin],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.num++
    // this.func_self()
    // this.func_one()
    // this.func_two()
    this.func_submit()
  },
  methods: {
    func_two() {
      this.form.xyz = '456'
      console.log('func_two in Helloword')
    },
    func_self() {
      console.log('func_three in Helloword')
    }
  }
}
</script>
