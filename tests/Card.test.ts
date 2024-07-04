import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Card from '@/components/Card.vue';

describe('Card.vue', () => {
  it('renders with correct props', () => {
    const wrapper = mount(Card, {
      props: {
        color: '#ff0000',
        title: 'Test Title',
        content: 'Test Content',
        button: false,
      },
    });

    const cardElement = wrapper.find('div');
    const titleElement = wrapper.find('h1');
    const contentElement = wrapper.find('p');

    expect(cardElement.attributes('style')).toContain('background-color: rgb(255, 0, 0)');
    expect(titleElement.text()).toBe('Test Title');
    expect(contentElement.text()).toBe('Test Content');
  });

  it('applies button class when button prop is true', () => {
    const wrapper = mount(Card, {
      props: {
        color: '#00ff00',
        title: 'Button Title',
        content: 'Button Content',
        button: true,
      },
    });

    const cardElement = wrapper.find('div');

    expect(cardElement.classes()).toContain('flex-col');
    expect(cardElement.classes()).toContain('lg:flex-row');
    expect(cardElement.classes()).toContain('items-center');
    expect(cardElement.classes()).toContain('lg:pt-3');
    expect(cardElement.classes()).toContain('lg:pb-3');
  });

  it('does not apply button class when button prop is false', () => {
    const wrapper = mount(Card, {
      props: {
        color: '#0000ff',
        title: 'No Button Title',
        content: 'No Button Content',
        button: false,
      },
    });

    const cardElement = wrapper.find('div');

    expect(cardElement.classes()).toContain('w-full');
    expect(cardElement.classes()).toContain('lg:w-72');
    expect(cardElement.classes()).toContain('flex-col');
  });

  it('applies padding class when title prop is not provided', () => {
    const wrapper = mount(Card, {
      props: {
        color: '#ffff00',
        title: '',
        content: 'No Title Content',
        button: false,
      },
    });

    const contentElement = wrapper.find('p');

    expect(contentElement.classes()).toContain('pt-8');
    expect(contentElement.classes()).toContain('lg:py-8');
  });
});
