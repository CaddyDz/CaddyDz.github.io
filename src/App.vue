<template>
  <div>
		<keep-alive>
			<component :is="component"></component>
		</keep-alive>
		<button @click="component = 'form-one'">Show form one</button>
		<button @click="component = 'form-two'">Show form two</button>
  </div>
</template>

<script>
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default {
  components: {
    'form-one': formOne,
		'form-two': formTwo
  },
  data() {
    return {
      component: 'form-two'
    }
  },
  methods: {

  }
}
</script>

<style media="screen">

</style>
