new Vue({
  el: '#vue-app',
  data: {
    a: 0,
    b: 0,
    age: 20
  },
  // Computed properties are more efficient than methods
  // They require returning a value
  // They are unique in binding to their respective values
  computed: {
    addToA: function() {
      console.log('addToA');
      return this.a + this.age;
    },
    addToB: function() {
      console.log('addToB');
      return this.b + this.age;
    }
  }
});
