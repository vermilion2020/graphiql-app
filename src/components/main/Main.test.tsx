import { describe, it } from 'vitest';
import { renderWithProviders } from '../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../redux';
import { setSingIn } from '../../redux/features/appSlice';
import { App } from '../../App';

describe('Not Found page', async () => {
  it('Not found page is shown for not-existing routes', async () => {
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
});
