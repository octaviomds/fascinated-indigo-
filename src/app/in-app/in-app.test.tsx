import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import InApp from './in-app';
import 'element-internals-polyfill';

test('renders InApp component', () => {
  const wrapper = render(<InApp />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});