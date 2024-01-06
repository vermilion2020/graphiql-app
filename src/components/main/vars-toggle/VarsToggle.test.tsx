import { describe, it } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../test-utils';
import { store } from '../../../redux';
import VarsToggle from './VarsToggle';
import { setVisibleTab } from '../../../redux/features/editorSlice';

describe('Toolbar', async () => {
  it('Edit form is shown when clicking edit icon', async () => {
    // Arrange
    store.dispatch(setVisibleTab('vars'));
    renderWithProviders(
      <VarsToggle />,
      { store }
    );

    // Act
    fireEvent.click(screen.getByTestId('headers-toggle'));

    // Expect
    expect(screen.getByTestId('headers-toggle')).toHaveClass('text-buttonColor-300');
  });
});
