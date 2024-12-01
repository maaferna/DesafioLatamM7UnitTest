import { mount } from '@vue/test-utils';
import ContactView from '@/views/ContactView.vue';

describe('ContactView', () => {
  test('renders the Contact view', () => {
    const wrapper = mount(ContactView);
    expect(wrapper.text()).toContain('Contact Us');
  });

  test('matches snapshot', () => {
    const wrapper = mount(ContactView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
