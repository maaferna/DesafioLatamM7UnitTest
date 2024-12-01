import { mount } from '@vue/test-utils';
import AboutView from '@/views/AboutView.vue';

describe('AboutView', () => {
  test('renders the About view', () => {
    const wrapper = mount(AboutView);
    expect(wrapper.text()).toContain('About Us');
  });

  test('matches snapshot', () => {
    const wrapper = mount(AboutView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
