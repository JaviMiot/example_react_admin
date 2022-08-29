import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hello } from '../components/hello';
import { create, act } from 'react-test-renderer';

describe('<Hello/>', () => {
  test('renders learn react link', () => {
    const h = render(<Hello />);
    expect(screen.getByText(/Hello/)).toBeInTheDocument();
  });
});

describe('<Hello/> snapshop', () => {
  test('get snapshop', () => {
    const hello = create(<Hello />);
    expect(hello.toJSON()).toMatchSnapshot();
  });
});
