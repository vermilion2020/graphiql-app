import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import { store } from '../../redux';
import Response from './Response';

import { setLoading, setResponse } from '../../redux/features/requestSlice';
import { setTestMode } from '../../redux/features/appSlice';

describe('Response', async () => {
  it('Preloader is shown while data is fetching', async () => {
    // Arrange
    store.dispatch(setLoading(true));
    renderWithProviders(<Response />, { store });

    // Expect
    expect(screen.getByTestId('loader')).toBeVisible();
  });

  it('Response editor is displayed data is loaded', async () => {
    // Arrange
    const response = `{response: 'ok'}`;
    store.dispatch(setLoading(false));
    store.dispatch(setTestMode(true));
    store.dispatch(setResponse(response));
    renderWithProviders(<Response />, { store });

    // Expect
    expect(screen.getByTestId('response-editor')).toBeVisible();
  });
});
