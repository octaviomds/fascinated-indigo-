import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Chauffeur from './chauffeur';
import 'element-internals-polyfill';

test('renders Chauffeur component', () => {
  const wrapper = render(<Chauffeur />);
  expect(wrapper).toBeTruthy();
});