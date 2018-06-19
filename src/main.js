import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

Vue.config.productionTip = false

Vue.use(VueResource);

// Custom directives
Vue.directive('rainbow', {
	bind(el) {
		el.style.color = "#" + Math.random().toString().slice(2,8);
	}
});

Vue.directive('theme', {
	bind(el, binding) {
		if(binding.value == 'wide') {
			el.style.maxWidth = '1200px';
		} else if (binding.value == 'narrow') {
			el.style.maxWidth = '560px';
		}
		if(binding.arg == 'column') {
			el.style.background = '#ddd';
			el.style.padding = '20px';
		}
	}
});

new Vue({
  render: h => h(App)
}).$mount('#app')
