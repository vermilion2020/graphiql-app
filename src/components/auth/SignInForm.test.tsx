import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test-utils';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux';
import { setSingIn } from '../../redux/features/appSlice';
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
});
