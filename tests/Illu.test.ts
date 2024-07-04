import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Illu from '@/components/Illu.vue';

describe('Illu.vue', () => {
  it('renders the image with the correct src', () => {
    const illu = 'https://example.com/image.jpg';
    const wrapper = mount(Illu, {
      props: {
        illu,
      },
    });

    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(illu);
  });
});
