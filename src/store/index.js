import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import MUTATIONS from './mutations';
import getters from './getters';

Vue.use(Vuex);

export const mutations = MUTATIONS;

export default new Vuex.Store({
  state,
  MUTATIONS,
  getters,
  actions: {
  },
  modules: {
  },
});
