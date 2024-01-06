import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test-utils';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux';
import { setSingIn, setTestMode } from '../../redux/features/appSlice';
import { App } from '../../App';

describe('Sign in form', async () => {
  it('Sign in form is rendered', async () => {
    store.dispatch(setSingIn(false));
    renderWithProviders(
      <MemoryRouter initialEntries={['/sign-in']}>
        <App />
      </MemoryRouter>,
      { store }
    );

    expect(screen.getByText('Email address')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('Main page is shown, when user is signed in and open Sign-in page', async () => {
    // Arrange
    store.dispatch(setSingIn(true));
    store.dispatch(setTestMode(true));
    renderWithProviders(
      <MemoryRouter initialEntries={['/sign-ip']}>
        <App />
      </MemoryRouter>,
      { store }
    );

    // Expect
    expect(location.pathname).toEqual('/');
  });
});
