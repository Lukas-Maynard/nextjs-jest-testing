import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from './page';

test('Loads the home page and updates number display input on submit', () => {
  render(<Page />);

  const numberInput = screen.getByTestId('input-number');
  const submitButton = screen.getByTestId('submit-button');
  const displayInput = screen.getByTestId('display-input');

  fireEvent.change(numberInput, { target: { value: '40' } });
  fireEvent.click(submitButton);
  expect(displayInput).toHaveValue('40');
});
