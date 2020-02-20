<template>
  <div
    class="custom-block warning global-message-bar"
    v-show="showMessage"
  >
    <p class="custom-block-title">GLOBAL MESSAGE</p>
    <p>A global message</p>
    <p @click="set_data">Don't show me this message again.</p>
    <div class="close" @click="set_data">X</div>
  </div>
</template>

<script>
import {storageValues} from '../../data/sessionAndLocalStorageData/globalMessageBar.js';
console.log(storageValues)
export default {
    props: {
        show: {
          type: Boolean
        }
    },
  data() {
    return {
      closedGlobalMessage: sessionStorage.closedGlobalMessage || undefined,
      // showMessage: false
      showMessage: this.$props.show
    };
  },
  mounted() {
    this.init();
  },

  methods: {
    init: function() {
      console.log("initialize!");
      const showGlobalMessage = this.get_data();
      //   console.log(showGlobalMessage);
    },
    set_data: function() {
      console.log("set");
      // sessionStorage.setItem("closedGlobalMessage", true);
      // this.showMessage = false;
    },
    get_data: function() {
      console.log("get");
    //   this.set_data_to_false();
      // return sessionStorage.getItem("closedGlobalMessage");
    },
    set_data_to_false: function() {
        // sessionStorage.setItem("closedGlobalMessage", false);
    }
  }
};
</script>

<style scoped>
.global-message-bar {
  position: relative;
}
.close {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
</style>
