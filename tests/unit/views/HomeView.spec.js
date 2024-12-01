import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';

describe('HomeView', () => {
  test('renders the Home view', () => {
    const wrapper = mount(HomeView);
    expect(wrapper.text()).toContain('Vista de Posts');
  });

  test('matches snapshot', () => {
    const wrapper = mount(HomeView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
