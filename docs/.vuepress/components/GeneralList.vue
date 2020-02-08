<template>
<ul id="example-1">
    <div>{{ another }}</div>
  <li v-for="item in items">
    {{ item.title }}
  </li>
</ul>
</template>

<script>
export default {
  data () {
    const features = require('../data/features.json');
    console.log(features);
      return {
          items: features,
          another: "jason"
      }
  }
}

</script>

<style scoped>
li {
    color: red;
}
</style>