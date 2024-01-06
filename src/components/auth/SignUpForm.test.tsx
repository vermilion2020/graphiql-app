import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test-utils';
// import { fireEvent, screen, waitFor } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux';
import { setSingIn, setTestMode } from '../../redux/features/appSlice';
import SignUpForm from './SignUpForm';
import { App } from '../../App';
import { mswServer } from '../../setupTests';
import { MOCK_AUTH } from '../../mock';

describe('Sign up form', async () => {
  it('Sign up form is rendered', async () => {
    store.dispatch(setSingIn(false));
    renderWithProviders(
      <MemoryRouter initialEntries={['/sign-up']}>
        <SignUpForm />
      </MemoryRouter>,
      { store }
    );

    expect(screen.getByText('Email address')).toBeInTheDocument();
    expect(screen.getByText('Create password')).toBeInTheDocument();
    expect(screen.getByText('Confirm password')).toBeInTheDocument();
  });

  it('Main page is shown, when user is signed in and open Sign-up page', async () => {
    // Arrange
    mswServer.use(MOCK_AUTH);
    store.dispatch(setSingIn('user_uid'));
    store.dispatch(setTestMode(true));
    renderWithProviders(
      <MemoryRouter initialEntries={['/sign-up']}>
        <App />
      </MemoryRouter>,
      { store }
    );

    // Expect
    expect(location.pathname).toEqual('/');
  });
});
