import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Button from '@/components/Button.vue';

describe('Button.vue', () => {
  it('renders as a submit button when type is submit', () => {
    const wrapper = mount(Button, {
      props: {
        color: '#ff0000',
        content: 'Submit Button',
        icon: '',
        bold: false,
        type: 'submit',
      },
    });

    const buttonElement = wrapper.find('button');
    expect(buttonElement.exists()).toBe(true);
    expect(buttonElement.attributes('type')).toBe('submit');
    expect(buttonElement.attributes('style')).toContain('background-color: rgb(255, 0, 0)');
    expect(buttonElement.find('p').text()).toBe('Submit Button');
  });

  it('renders as a div when type is not submit', () => {
    const wrapper = mount(Button, {
      props: {
        color: '#00ff00',
        content: 'Regular Button',
        icon: '',
        bold: false,
        type: 'button',
      },
    });

    const divElement = wrapper.find('div');
    expect(divElement.exists()).toBe(true);
    expect(divElement.attributes('style')).toContain('background-color: rgb(0, 255, 0)');
    expect(divElement.find('p').text()).toBe('Regular Button');
  });

  it('applies bold class when bold prop is true', () => {
    const wrapper = mount(Button, {
      props: {
        color: '#0000ff',
        content: 'Bold Button',
        icon: '',
        bold: true,
        type: 'button',
      },
    });

    const pElement = wrapper.find('p');
    expect(pElement.classes()).toContain('font-bold');
  });

  it('renders icon when icon prop is provided', () => {
    const wrapper = mount(Button, {
      props: {
        color: '#ffff00',
        content: 'Button with Icon',
        icon: 'path/to/icon.png',
        bold: false,
        type: 'button',
      },
    });

    const imgElement = wrapper.find('img');
    expect(imgElement.exists()).toBe(true);
    expect(imgElement.attributes('src')).toBe('path/to/icon.png');
  });
});
