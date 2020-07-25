import { shallowMount } from '@vue/test-utils';
import FileUpload from '@/components/elements/FileUpload.vue';

describe('FileUpload.vue Test', () => {
  it('renders message when component is created', () => {
    // render the component
    const wrapper = shallowMount(FileUpload);

    const fileUpload = wrapper.findComponent(FileUpload);
    expect(fileUpload.exists()).toBe(true);
  });
});
