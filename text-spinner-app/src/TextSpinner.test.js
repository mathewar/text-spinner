
import React from 'react';
import { render, screen } from '@testing-library/react';
import TextSpinner from './TextSpinner';

describe('TextSpinner', () => {
  it('renders without crashing', () => {
    render(<TextSpinner isLoading={true} />);
  });

  it('displays a phrase when isLoading is true', () => {
    render(<TextSpinner isLoading={true} />);
    const phraseElement = screen.getByText(/./i); // a regex to match any text
    expect(phraseElement).toBeInTheDocument();
  });

  it('does not display a phrase when isLoading is false', () => {
    render(<TextSpinner isLoading={false} />);
    const phraseElement = screen.queryByText(/./i);
    expect(phraseElement).not.toBeInTheDocument();
  });

  it('displays the children when isLoading is false', () => {
    render(
      <TextSpinner isLoading={false}>
        <div>Child Content</div>
      </TextSpinner>
    );
    const childElement = screen.getByText('Child Content');
    expect(childElement).toBeInTheDocument();
  });
});
