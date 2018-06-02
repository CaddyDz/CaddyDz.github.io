<template>
  <ul>
    <li v-for="ninja in ninjas">{{ ninja }}</li>
  </ul>
</template>
<script>
export default {
  data: () => ({
    ninjas: ['Yoshi', 'Mario', 'Ryu']
  })
}
</script>
