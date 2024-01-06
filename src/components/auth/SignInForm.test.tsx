import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux';
import { setSingIn } from '../../redux/features/appSlice';
import SignInForm from './SignInForm';

describe('Sign in form', async () => {
  it('Sign in form is rendered', async () => {
    store.dispatch(setSingIn(false));
    renderWithProviders(
      <MemoryRouter initialEntries={['/sign-in']}>
        <SignInForm />
      </MemoryRouter>,
      { store }
    );

    expect(screen.getByText('Email address')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('Sign-up page validation', async () => {
    // Arrange
    const invalidEmail = '123456.ru';
    renderWithProviders(
      <MemoryRouter initialEntries={['/sign-in']}>
        <SignInForm />
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
    renderWithProviders(
      <MemoryRouter initialEntries={['/sign-in']}>
        <SignInForm />
      </MemoryRouter>,
      { store }
    );

    fireEvent.paste(screen.getByTestId('email'), email);
    fireEvent.paste(screen.getByTestId('password'), password);

    // Expect
    expect(screen.getByTestId('submit-btn')).toHaveAttribute('disabled', '');
  });
});
