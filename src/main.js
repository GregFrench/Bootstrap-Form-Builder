import Vue from 'vue';
import contenteditable from 'vue-contenteditable';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(contenteditable);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
