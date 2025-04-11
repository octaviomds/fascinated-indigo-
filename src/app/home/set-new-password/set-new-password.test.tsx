import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import SetNewPassword from './set-new-password';
import 'element-internals-polyfill';

test('renders SetNewPassword component', () => {
  const wrapper = render(<SetNewPassword />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});