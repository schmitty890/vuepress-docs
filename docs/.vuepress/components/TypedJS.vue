<template>
    <p class="description">Frontend Docs for <span id="typed"></span></p>    
</template>

<script>
export default {
    props: {
        fileName: {
            type: String,
            required: true
        }
    },
    data: function() {
        return {
            name: "TypedJS Component"
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init: function() {
            this.typedJS();
        },
        typedJS: function() {
            const Typed = require('typed.js');
            const dataURL = require('../data/' + this.$props.fileName + '.json'); // if we restructure the data folder we need to look at this

            const options = {
                strings: dataURL,
                typeSpeed: 100,
                backDelay: 2000,
                backSpeed: 50,
                loop: true,
                loopCount: Infinity
            };
            const typed = new Typed('#typed', options);
        }
    }
}
</script>