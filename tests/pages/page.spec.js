import { shallowMount, createLocalVue } from '@vue/test-utils';
import pageError404 from '@/pages/Error404.vue';
import pageIndex from '@/pages/Index.vue';
import Quasar from 'quasar';

describe('Something Something', () => {
  let localVue;
  let wrapper;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Quasar);
  });

  test('Index - isVueInstance', () => {
    wrapper = shallowMount(pageIndex, {
      localVue,
    });
    expect(wrapper.isVueInstance()).toBe(true);
  });

  test('renders correctly - Index', () => {
    wrapper = shallowMount(pageIndex, {
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
  test('Error404 - isVueInstance', () => {
    wrapper = shallowMount(pageError404, {
      localVue,
    });
    expect(wrapper.isVueInstance()).toBe(true);
  });

  test('renders correctly - Error404', () => {
    wrapper = shallowMount(pageError404, {
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
