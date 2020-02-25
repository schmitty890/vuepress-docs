

<template>
  <VueSlickCarousel v-bind="settings">
    <div
      class="testt"
      v-for="(item, index) in fetchDataFile().data"
      :key="`${index}`"
    >
    <a class="button" :href="item.link">{{ item.text }}</a>
    </div>
  </VueSlickCarousel>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import { SETTINGS } from './config';

  console.log(SETTINGS)

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
        settings: SETTINGS
      }
    },
    mounted() {
        this.init();
    },
    methods: {
      init: function() {
        // console.log(this.$props.slides);
      },
    fetchDataFile: function() {
        const dataURL = require("../../data/buttonList.json");
        return {
            data: dataURL
        };
    }
    }
  }
</script>

<style scoped>
.button {
    display: inline-block;
    font-size: 1.2rem;
    background-color: #f00;
    color: #fff;
    cursor: pointer;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    border-bottom: 1px solid #389d70;

}
.button:hover {
    text-decoration: underline;
}




</style>