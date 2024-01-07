import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test-utils';
// import { fireEvent, screen, waitFor } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux';
import { setSingIn } from '../../redux/features/appSlice';
import SignUpForm from './SignUpForm';
import { mswServer } from '../../setupTests';
import { MOCK_AUTH } from '../../mock';
import { App } from '../../App';

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

  it('Sign-up page validation', async () => {
    // Arrange
    const invalidEmail = '123456.ru';
    mswServer.use(MOCK_AUTH);
    renderWithProviders(
      <MemoryRouter initialEntries={['/sign-up']}>
        <SignUpForm />
      </MemoryRouter>,
      { store }
    );

    fireEvent.paste(screen.getByTestId('email'), invalidEmail);
    fireEvent.click(screen.getByTestId('submit-btn'));

    // Expect
    expect(screen.getByTestId('submit-btn')).toBeDisabled();
    expect(screen.getByTestId('email-error')).toBeVisible();
  });

  it('Enter a valid data', async () => {
    // Arrange
    const email = 'test123@example.com';
    const password = '12345678tT/';
    mswServer.use(MOCK_AUTH);
    renderWithProviders(
      <MemoryRouter initialEntries={['/sign-up']}>
        <SignUpForm />
      </MemoryRouter>,
      { store }
    );

    fireEvent.paste(screen.getByTestId('email'), email);
    fireEvent.paste(screen.getByTestId('password'), password);
    fireEvent.paste(screen.getByTestId('confirmPassword'), password);
    fireEvent.click(screen.getByTestId('accept'));

    // Expect
    expect(screen.getByTestId('submit-btn')).toHaveAttribute('disabled', '');
  });

  it('Back button opens Welcome page', async () => {
    // Arrange
    store.dispatch(setSingIn(false));
    renderWithProviders(
      <MemoryRouter initialEntries={['/sign-up']}>
        <App />
      </MemoryRouter>,
      { store }
    );

    fireEvent.click(screen.getByTestId('back-btn'));

    // Expect
    expect(location.pathname).toEqual('/');
  });
});
