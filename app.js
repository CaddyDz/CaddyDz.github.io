new Vue({
  el: '#root',
  data: {
    name: 'Salim',
    job: 'Developer'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    }
  }
});