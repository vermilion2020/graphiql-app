import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../../App';

describe('Not Found page', async () => {
  it('Not found page is shown for not-existing routes', async () => {
    // Arrange
    renderWithProviders(
      <MemoryRouter initialEntries={['/not-found']}>
        <App />
      </MemoryRouter>
    );

    // Expect
    expect(screen.getByTestId('not-found')).toBeVisible();
  });
});
