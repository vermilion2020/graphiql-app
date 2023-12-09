import { describe, it } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Locale from './Locale';
import { renderWithProviders } from '../../test-utils';
import { LocaleState } from '../../context/LocaleContext';
import Header from '../layout/Header';
import { getTexts } from '../../helpers/localisation';

describe('Localisation', async () => {
  it('Stored localisation value is applied on load', async () => {
    // Arrange
    const testLocale = 'Ru';
    localStorage.setItem('lang', 'Ru');
    renderWithProviders(
      <LocaleState>
        <Locale />
      </LocaleState>
    );

    // Expect
    expect(screen.getByTestId('locale-current')).toHaveTextContent(
      `${testLocale}`
    );
  });

  it('Change localisation value changes menu component names', async () => {
    // Arrange
    const testLocale = 'Ru';
    const texts = getTexts(testLocale, 'menu');
    renderWithProviders(
      <LocaleState>
        <MemoryRouter>
          <Header />
        </MemoryRouter> 
      </LocaleState>
    );

    // Act
    fireEvent.click(screen.getByTestId('locale-current'));
    fireEvent.click(screen.getByTestId(`locale-${testLocale}`));

    // Expect
    expect(screen.getByTestId('locale-current')).toHaveTextContent(
      `${testLocale}`
    );
    expect(screen.getByText(texts['main'])).toBeVisible();
    expect(screen.getByText(texts['welcome'])).toBeVisible();
  });
});
