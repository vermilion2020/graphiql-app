import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import { App } from '../../App';
import { store } from '../../redux';
import { setError } from '../../redux/features/appSlice';
import { MemoryRouter } from 'react-router-dom';

describe('Not Found page', async () => {
  it('Correct error message is shown, when an error occurs', async () => {
    // Arrange
    const errorMessage = 'Test error message';
    store.dispatch(setError(errorMessage));
    renderWithProviders(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      { store }
    );

    // Expect
    expect(screen.getByTestId('error-message')).toHaveTextContent(errorMessage);
  });
});
