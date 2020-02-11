

<template>
  <VueSlickCarousel v-bind="settings">
    <div><h3>hi</h3></div>
    <div><h3>hi</h3></div>
    <div><h3>hi</h3></div>
    <div><h3>hi</h3></div>
    <div><h3>hi</h3></div>
    <div><h3>hi</h3></div>
  </VueSlickCarousel>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
            slidesToShow: 3,
            arrows: true,
            dots: true,
        },
      }
    },
  }
</script>

<style scoped>
</style>