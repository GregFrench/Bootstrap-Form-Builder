import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import getters from '../../src/store/getters';
import mutations from '../../src/store/mutations';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('getters', () => {
  it('html', () => {
    // mock state
    const state = {
      fields: [{
        id: 'header',
        text: 'Header',
        name: 'header',
        label: 'Header',
        subheader: 'Test',
        type: 'header',
        tagname: 'h1',
        textalign: 'text-left',
      }],
    };

    // get the result from the getter
    const result = getters.html(state);

    // assert the result
    expect(result).toBe(`<h1>
  Header
  <small>
    Test
  </small>
</h1>
`);
  });
});
