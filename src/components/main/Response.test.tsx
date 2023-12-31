import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import { store } from '../../redux';
import Response from './Response';

import { setLoading } from '../../redux/features/requestSlice';

describe('Response', async () => {
  it('Preloader is shown while data is fetching', async () => {
    // Arrange
    store.dispatch(setLoading(true));
    renderWithProviders(
      <Response />,
      { store }
    );

    // Expect
    expect(screen.getByTestId('loader')).toBeVisible();
  });
});
