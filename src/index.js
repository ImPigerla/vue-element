import Vue from 'vue'
import ElementUI from 'element-ui'

// 样式
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.scss'

import App from 'src/views/app'

const isProduct = process.env.NODE_ENV === 'production'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.config.devtools = !isProduct

new Vue({
    el: '#app',
    template: '<app></app>',
    components: {App}
})
