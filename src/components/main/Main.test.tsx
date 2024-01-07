import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { setSingIn, setTestMode } from '../../redux/features/appSlice';
import { App } from '../../App';
import Editor from './Editor';
import { setQuery } from '../../redux/features/editorSlice';

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

  it('Logout button is shown when user is logged in', async () => {
    // Arrange
    store.dispatch(setTestMode(true));
    store.dispatch(setSingIn(true));
    renderWithProviders(
      <MemoryRouter initialEntries={['/main']}>
        <Editor />
      </MemoryRouter>,
      { store }
    );

    // Expect
    expect(screen.getByTestId('vars-editor')).toBeVisible();
    expect(screen.getByTestId('query-editor')).toBeVisible();
  });

  it('Error is shown when try to run invalid query', async () => {
    // Arrange
    store.dispatch(setTestMode(true));
    store.dispatch(setQuery('{(123'));
    renderWithProviders(
      <MemoryRouter initialEntries={['/main']}>
        <App />
      </MemoryRouter>,
      { store }
    );

    fireEvent.click(screen.getByTestId('run-query-btn'));

    // Expect
    await waitFor(
      () => expect(screen.getByTestId('error-message')).toBeVisible(),
      {
        timeout: 5000,
      }
    );
  });
});
