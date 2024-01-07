import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import { store } from '../../redux';
import SType from './SType';
import { setSchemaTypes } from '../../redux/features/documentationSlice';
import { TEST_TYPES } from '../../model/testDocsData';
import { MemoryRouter } from 'react-router-dom';

describe('Response', async () => {
  store.dispatch(setSchemaTypes(TEST_TYPES));

  it('Scalar type label is shown for Scalar type', async () => {
    // Arrange
    renderWithProviders(<SType sTypeName="Int" />, { store });

    // Expect
    expect(screen.getByTestId('scalar-type')).toBeVisible();
  });

  it('Input Object type label is shown for Input Object', async () => {
    // Arrange
    renderWithProviders(
      <MemoryRouter>
        <SType sTypeName="FilterCharacter" />
      </MemoryRouter>,
      { store }
    );

    // Expect
    expect(screen.getByTestId('input-object-type')).toBeVisible();
  });

  it('Object type label is shown for Object', async () => {
    // Arrange
    renderWithProviders(
      <MemoryRouter>
        <SType sTypeName="Characters" />
      </MemoryRouter>,
      { store }
    );

    // Expect
    expect(screen.getByTestId('object-type')).toBeVisible();
  });

  it('Enum type label is shown for Enum', async () => {
    // Arrange
    renderWithProviders(<SType sTypeName="CacheControlScope" />, { store });

    // Expect
    expect(screen.getByTestId('enum-type')).toBeVisible();
  });
});
