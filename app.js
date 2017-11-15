new Vue({
  el: '#root',
  data: {
    name: 'Salim',
    job: 'Developer',
    website: 'https://caddydz.github.io',
    websiteTag: '<a href="https://caddydz.github.io">Caddy Dz Website</a>'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    }
  }
});