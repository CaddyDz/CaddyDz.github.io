<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      title: 'Vue Ninjas'
    }
  },
  methods: {
    changeTitle() {
      this.title = "Vue Wizards";
    }
  }
}
</script>

<style media="screen" scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
