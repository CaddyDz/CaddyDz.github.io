<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from './Ninjas.vue'
export default {
  components: {
    'ninjas': Ninjas
  },
  data() {
    return {
      title: 'Ninjas App'
    }
  }
}
</script>
<style media="screen" scoped>
h1 {
  color: purple;
}
</style>
