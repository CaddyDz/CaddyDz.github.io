import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

Vue.config.productionTip = false

Vue.use(VueResource);

// Filters
Vue.filter('to-uppercase', function(value) {
	return value.toUpperCase()
});

Vue.filter('snippet', function (value) {
	return value.slice(0, 100) + '...';
});

new Vue({
  render: h => h(App)
}).$mount('#app')
