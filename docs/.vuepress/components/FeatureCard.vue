<template>
    <div class="features">
        <div class="feature" v-for="(item, index) in fetchDataFile(fileName).data" :key="item.title">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <p class="action">
                <a :href="item.linkURL" class="nav-link action-button">
                    {{ item.linkText }}
                </a>
            </p>
        </div>
    </div>
</template>



<script>
export default {
    props: {
        fileName: String
    },
    data: function() {
        return {
            name: 'FeatureCard Component'
        }
    },
    methods: {
        fetchDataFile: function(fileName) {
            console.log('fetchDataFile function');
            console.log(fileName);
            const dataURL = require('../data/' + fileName + '.json'); // if we restructure the data folder we need to look at this
            return {
                data: dataURL
            }
        }
    }
}
</script>