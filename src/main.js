import Vue from 'vue'
import App from './App.vue'
// Importing components globally
// import Ninjas from './Ninjas.vue'

// Vue.component('ninjas', Ninjas);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
