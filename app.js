Vue.component ('greeting', {
  props: [
    'property',
  ],
  template: `
    <p>Hey there, I am a {{ name }}<button @click='changeName'>Change Name</button></p>
  `,
  data: function() {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName() {
      this.name = 'Mario';
    }
  }
});

new Vue({
  el: '#vue-app-one'
});

new Vue({
  el: '#vue-app-two'
});
