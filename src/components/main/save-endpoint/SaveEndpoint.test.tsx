import { describe, it } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../test-utils';
import { store } from '../../../redux';
import { DEFAULT_URL } from '../../../model/queries';
import SaveEndpoint from './SaveEndpoint';

describe('Toolbar', async () => {
  it('Edit form is shown when clicking edit icon', async () => {
    // Arrange
    renderWithProviders(
      <SaveEndpoint />,
      { store }
    );

    // Act
    fireEvent.click(screen.getByTestId('edit-btn'));

    // Expect
    expect(screen.getByTestId('url-input')).toHaveValue(DEFAULT_URL);
    expect(screen.getByTestId('save-btn')).toBeVisible();
  });
});
