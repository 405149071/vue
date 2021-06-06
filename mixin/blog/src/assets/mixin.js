export const myMixin = {
  data(){
    return {
      num : 1,
      form: {
        abc: "123"
      }
    }
  },
  created(){
    this.hello();
  },
  methods: {
    hello(){
      console.log("hello in mixin")
    },
    func_one() {
      console.log("func_one in mixin")
    },
    func_two() {
      console.log("func_two in mixin")
    },
    func_submit() {
      this.func_two();
      console.log("func_submit in mixin")
      console.log("num++= in mixin = ",this.num)
      console.log("form in mixin = ",this.form)
    }
  },
}
