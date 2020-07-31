import { shallowMount } from '@vue/test-utils';
import FileUpload from '@/components/elements/FileUpload.vue';

function getMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData,
  });
}

describe('FileUpload.vue Test', () => {
  it('renders message when component is created', () => {
    // render the component
    const wrapper = getMountedComponent(FileUpload, {
      field: {
        label: 'Test',
      },
    });

    const fileUpload = wrapper.findComponent(FileUpload);
    expect(fileUpload.exists()).toBe(true);
  });
});
