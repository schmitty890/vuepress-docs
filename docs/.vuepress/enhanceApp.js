// // .vuepress/enhanceApp.js
// import VueTypedJs from 'vue-typed-js'

// export default ({
//     Vue, // the version of Vue being used in the VuePress app
//     options, // the options for the root Vue instance
//     router, // the router instance for the app
//     siteData // site metadata
// }) => {
//     if (typeof process === 'undefined') { // process is undefined in a browser         
//         Vue.use(VueTypedJs)
//     }
// }

import SlickList from './components/Carousels/SlickList'
import FeatureCard from './components/Cards/FeatureCard'
import GlobalMessage from './components/Global/GlobalMessage'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {     
    Vue.component('SlickList', SlickList)
    Vue.component('FeatureCard', FeatureCard)
    Vue.component('GlobalMessage', GlobalMessage)
}