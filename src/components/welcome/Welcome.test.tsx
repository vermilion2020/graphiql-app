import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import { store } from '../../redux';
import { App } from '../../App';
import { MemoryRouter } from 'react-router-dom';

describe('Welcome', async () => {
  it('Welcome page is shown on the default route', async () => {
    // Arrange
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
      { store }
    );

    // Expect
    expect(screen.getByTestId('welcome-content')).toBeVisible();
  });
});
