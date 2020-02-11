
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
  <li v-for="(item, index) in fetchDataFile(fileName).data" :key="item.title">
    {{  reverseMessageAsMethod(item.title) }}
  </li>
</ul>
</template>

<script>

export default {
  
  props: { 
    fileName: String 
  },
  data: function() {
    return {
      name: 'GeneralList Component'
    }
  },
  methods: {
    fetchDataFile: function(fileName) {
      console.log('called');
      const dataURL = require('../data/' + fileName + '.json'); // if we restructure thie /data folder, this path routing will need to be looked at
      return {
        data: dataURL
      }
    },
    reverseMessageAsMethod: function (reverse) {
      if(typeof reverse !== "undefined") {
        return reverse.split('').reverse().join('')
      }
    },
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    },
  },
}

</script>

<style scoped>
li {
    color: red;
}
</style>