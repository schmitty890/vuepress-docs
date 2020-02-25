<template>
  <VueSlickCarousel v-bind="settings">
    <div
      class="employee"
      v-for="(item, index) in fetchDataFile().data"
      :key="item.bnkID"
    >
    <span v-if="item.teamLead" class="teamlead">
        teamlead
    </span>
      <img v-bind:src="item.photo" v-bind:alt="item.firstName + ' ' +
      item.lastName" />
      <div>{{ item.firstName }}</div>
      <div>teams:
          <span v-for="(team, index) in item.team" :key="index">
              <span>
                  {{team}}
                  <span v-if="index + 1 < item.team.length">, </span>
              </span>
            </span>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { SETTINGS } from './config';

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
        slidesToShow: Number(this.$props.slidesToShow) || SETTINGS.slidesToShow,
        slidesToScroll: Number(this.$props.slidesToScroll) || SETTINGS.slidesToScroll,
        arrows: this.$props.arrows,
        dots: this.$props.dots,
        autoplay: this.$props.autoplay,
        autoplaySpeed: Number(this.$props.autoplaySpeed) || SETTINGS.autoplaySpeed,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: Number(this.$props.slidesToShow) || 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init: function() {
      // console.log(this.$props.slides);
    },
    fetchDataFile: function() {
        const dataURL = require("../../data/roster.json");
        return {
            data: dataURL
        };
    }
  }
};
</script>

<style scoped>
    .teamlead {
        position: absolute;
    }
</style>
