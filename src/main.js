import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './app.vue'
import VueRouter from 'vue-router'

Vue.use(ElementUI);
Vue.use(VueRouter);

const app = new Vue({
    router: require('./router'),
    render: h => h(App)
}).$mount('#app');