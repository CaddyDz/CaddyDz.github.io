new Vue({
  el: '#app',
  data: {
    output: 'Your favourite food'
  },
  methods: {
    readRefs() {
      console.log(this.$refs.input.value);
      this.output = this.$refs.input.value;
    }
  }
});
