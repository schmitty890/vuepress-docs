
<!--
GeneralList Vue component
Data structure rendered within this list component is
[{
    "title": "title1",
    "description": "description1"
}]
-->
<template>
<ul class="list">
  <li v-for="(item, index) in getDataTest(fileName).data" :key="item.title">
    {{  reverseMessageAsMethod(item.title) }}
  </li>
</ul>
</template>

<script>

export default {
  
   props: ['fileName'],

  data: function() {
    return {
      name: 'GeneralList Component'
    }
  },
  methods: {
    getDataTest: function(fileName) {
      const dataURL = require('../data/' + fileName + '.json');
      return {
        data: dataURL
      }
    },
    reverseMessageAsMethod: function (reverse) {
      if(typeof reverse !== "undefined") {
        return reverse.split('').reverse().join('')
      }
      
    }
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
}

</script>

<style scoped>
li {
    color: red;
}
</style>