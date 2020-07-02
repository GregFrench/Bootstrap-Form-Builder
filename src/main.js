// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import contenteditable from 'vue-contenteditable'
import Store from './store'

Vue.use(Vuex)
Vue.use(contenteditable)

window.Vue = Vue;

const store = new Vuex.Store(Store);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: { App }
})
