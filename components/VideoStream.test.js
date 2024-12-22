import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoStream from './VideoStream';

test('renders VideoStream component', () => {
  render(<VideoStream />);
  expect(screen.getByText('Global Harvest TakeOver the Summit Live Stream')).toBeInTheDocument();
});
