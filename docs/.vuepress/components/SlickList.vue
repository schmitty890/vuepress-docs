

<template>
  <VueSlickCarousel v-bind="settings">
    <div><h3>hi</h3></div>
    <div><h3>test2</h3></div>
    <div><h3>hi3</h3></div>
    <div><h3>hi4</h3></div>
    <div><h3>hi5</h3></div>
    <div><h3>hi6</h3></div>
  </VueSlickCarousel>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    components: { VueSlickCarousel },
    props: {
        slidesToShow: {
          type: String
        },
        slidesToScroll: {
          type: String
        },
        arrows: {
          type: Boolean
        },
        dots: {
          type: Boolean
        },
        autoplay: {
          type: Boolean
        },
        autoplaySpeed: {
          type: String
        }
    },
    data() {
      return {
        settings: {
            slidesToShow: Number(this.$props.slidesToShow) || 3,
            slidesToScroll: Number(this.$props.slidesToScroll) || 1,
            arrows: this.$props.arrows,
            dots: this.$props.dots,
            autoplay: this.$props.autoplay,
            autoplaySpeed: Number(this.$props.autoplaySpeed) || 5000
        },
      }
    },
    mounted() {
        this.init();
    },
    methods: {
      init: function() {
        console.log(this.$props.slides);
      }
    }
  }
</script>

<style scoped>
</style>