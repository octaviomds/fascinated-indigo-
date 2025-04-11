import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Acces from './acces';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders Acces component', () => {
  const wrapper = render(<Acces />);
  expect(wrapper).toBeTruthy();
});