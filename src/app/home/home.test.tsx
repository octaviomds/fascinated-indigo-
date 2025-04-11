import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Home from './home';
import 'element-internals-polyfill';

test('renders Home component', () => {
  const wrapper = render(<Home />);
  expect(wrapper).toBeTruthy();
});