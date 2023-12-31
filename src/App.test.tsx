import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WrappedApp } from './App';

describe('App tests', () => {
  it('Renders React Components the first level heading', () => {
    // Arrange
    render(<WrappedApp />);

    // Expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('GraphQL editor');
  });
  <WrappedApp />;
});
