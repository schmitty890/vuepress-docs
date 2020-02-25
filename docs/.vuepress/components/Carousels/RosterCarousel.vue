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
import { SETTINGS_3_SLIDES, SETTINGS_5_SLIDES } from './config';

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
      settings: SETTINGS_5_SLIDES
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
