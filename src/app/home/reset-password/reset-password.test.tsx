import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import ResetPassword from './reset-password';
import 'element-internals-polyfill';

test('renders ResetPassword component', () => {
  const wrapper = render(<ResetPassword />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});