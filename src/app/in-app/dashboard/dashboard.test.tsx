import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Dashboard from './dashboard';
import 'element-internals-polyfill';

test('renders Dashboard component', () => {
  const wrapper = render(<Dashboard />);
  expect(wrapper).toBeTruthy();
});