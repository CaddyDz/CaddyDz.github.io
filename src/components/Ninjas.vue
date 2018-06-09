<template>
  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" @click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>
    <button type="button" @click="deleteNinja">Delete Ninja</button>
  </div>
</template>

<script>
export default {
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {

    }
  },
  methods: {
    deleteNinja() {
      this.ninjas.pop();
    }
  },
  // LifeCycle Hooks
  beforeCreate() {
    //do something before creating vue instance
    alert('Before Create');
  },
  created() {
    //do something after creating vue instance
    alert('Created');
  },
  beforeMount() {
    //do something before mounting vue instance
    alert('Before Mount');
  },
  mounted() {
    //do something after mounting vue instance
    alert('Mounted');
  },
  beforeUpdate() {
    //do something before updating vue instance
    alert('Before Update')
  },
  updated() {
    //do something after updating vue instance
    alert('Updated');
  }
}
</script>

<style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
