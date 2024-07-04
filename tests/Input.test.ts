import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import Input from '@/components/Input.vue';

describe('Input.vue', () => {
  it('renders with correct props', () => {
    const wrapper = mount(Input, {
      props: {
        type: 'text',
        name: 'test-input',
        required: true,
        label: 'Test Label',
        modelValue: 'initial value',
      },
    });

    const inputElement = wrapper.find('input');
    const labelElement = wrapper.find('label');

    expect(labelElement.text()).toBe('Test Label');
    expect(inputElement.attributes('type')).toBe('text');
    expect(inputElement.attributes('name')).toBe('test-input');
    expect(inputElement.attributes('required')).toBeDefined();
    expect(inputElement.element.value).toBe('initial value');
  });

  it('emits update:modelValue event on input', async () => {
    const wrapper = mount(Input, {
      props: {
        type: 'text',
        name: 'test-input',
        required: true,
        label: 'Test Label',
        modelValue: 'initial value',
      },
    });

    const inputElement = wrapper.find('input');
    await inputElement.setValue('new value');

    expect(wrapper.emitted()['update:modelValue']).toBeTruthy();
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['new value']);
  });
});
