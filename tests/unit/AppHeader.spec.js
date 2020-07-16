import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import AppHeader from '@/components/AppHeader.vue';
import elements from '../../src/elements';
import state from '../../src/store/state';
import getters from '../../src/store/getters';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('AppHeader.vue', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state,
    });
  });

  it('getHtml() returns an empty string when no form fields are present', () => {
    const wrapper = shallowMount(AppHeader, {
      store,
      localVue,
    });

    expect(wrapper.vm.getHtml({}, 0)).toBe('');
  });
});
