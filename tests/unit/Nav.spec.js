import { shallowMount } from '@vue/test-utils';
import Nav from '@/components/Nav.vue';

describe('Nav.vue Test', () => {
  it('renders message when component is created', () => {
    // render the component
    const wrapper = shallowMount(Nav);

    // check that the title is rendered
    expect(wrapper.text()).toMatch('Get Embed Code');
  });
});
