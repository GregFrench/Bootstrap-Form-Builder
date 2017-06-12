// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import vmodal from 'vue-js-modal'

Vue.use(Vuex)
Vue.use(vmodal)

const store = new Vuex.Store({
  state: {
    fields: []
  },
  mutations: {
    updateFields (state, payload) {
      state.fields = payload.fields
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
