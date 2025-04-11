import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Contact from './contact';
import 'element-internals-polyfill';

test('renders Contact component', () => {
  const wrapper = render(<Contact />);
  expect(wrapper).toBeTruthy();
});