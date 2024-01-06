import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test-utils';
// import { fireEvent, screen, waitFor } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux';
import { setSingIn } from '../../redux/features/appSlice';
import SignUpForm from './SignUpForm';

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
});
