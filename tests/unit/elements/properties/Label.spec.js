// Import `shallowMount` from Vue Test Utils and the component being tested
import { shallowMount } from '@vue/test-utils';
import Label from '@/components/elements/properties/Label.vue';

// Mount the component
// const wrapper = shallowMount(Label);

// helper function that mounts and returns the rendered component
function getMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData,
  });
}

// Here are some Jest tests, though you can
// use any test runner/assertion library combo you prefer
describe('Label', () => {
  it('renders correctly with different props', () => {
    expect(
      getMountedComponent(Label, {
        value: 'Hello',
      }).text(),
    ).toBe('Hello');
  });

  // Evaluate the results of functions in
  // the raw component options
  /* it('sets the correct default data', () => {
    expect(typeof MyComponent.data).toBe('function')
    const defaultData = MyComponent.data()
    expect(defaultData.message).toBe('hello!')
  }) */

  // Inspect the component instance on mount
  /* it('correctly sets the message when created', () => {
    expect(wrapper.vm.$data.message).toBe('bye!')
  }) */

  // Mount an instance and inspect the render output
  /* it('renders the correct message', () => {
    expect(wrapper.text()).toBe('bye!')
  }) */
});
