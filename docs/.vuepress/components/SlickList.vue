<template>
<ul id="slick-list">
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
          items: features
      }
  }
}

</script>

<style scoped>
li {
    color: blue;
}
</style>