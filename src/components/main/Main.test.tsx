import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux';
import { screen } from '@testing-library/react';
import { setSingIn, setTestMode } from '../../redux/features/appSlice';
import { App } from '../../App';

describe('Main page', async () => {
  it('Welcome page is shown, when user is not signed in', async () => {
    // Arrange
    store.dispatch(setSingIn(false));
    renderWithProviders(
      <MemoryRouter initialEntries={['/main']}>
        <App />
      </MemoryRouter>,
      { store }
    );

    // Expect
    expect(location.pathname).toEqual('/');
  });

  it('Logout button is shown when user is logged in', async () => {
    // Arrange
    store.dispatch(setTestMode(true));
    store.dispatch(setSingIn(true));
    renderWithProviders(
      <MemoryRouter initialEntries={['/main']}>
        <App />
      </MemoryRouter>,
      { store }
    );

    // Expect
    expect(screen.getByTestId('logout-btn')).toBeVisible();
  });
});
