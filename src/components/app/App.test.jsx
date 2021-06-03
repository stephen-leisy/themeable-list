/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('futurama test block', () => {
  afterEach(() => cleanup());
  it('renders a button to the screen', () => {
    // const { asFragment } = render(<App />);
    // expect(asFragment()).toMatchSnapshot();
  });
});
