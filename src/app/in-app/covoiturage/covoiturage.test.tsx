import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Covoiturage from './covoiturage';
import 'element-internals-polyfill';

test('renders Covoiturage component', () => {
  const wrapper = render(<Covoiturage />);
  expect(wrapper).toBeTruthy();
});