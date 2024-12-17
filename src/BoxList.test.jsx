import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import BoxList from './BoxList';

function addBox(boxList, height = '2', width = '2', color = 'peachpuff') {
  const heightInput = boxList.getByLabelText('Height');
  const widthInput = boxList.getByLabelText('Width');
  const backgroundInput = boxList.getByLabelText('Background Color');
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText('Add a new box!');
  fireEvent.click(button);
}

it('renders without crashing', function () {
  render(<BoxList />);
});

it;
