import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import SignUp from './sign-up';
import 'element-internals-polyfill';

test('renders SignUp component', () => {
  const wrapper = render(<SignUp />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});