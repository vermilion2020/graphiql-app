import { describe, it } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';
import { store } from '../../redux';
import Documentation from './Documentation';
import { setLoading, setQueriesDisplayed, setSchemaQueries, setSchemaTypes } from '../../redux/features/documentationSlice';
import { SchemaType } from '../../model/schema.interface';
import Query from './Query';
import { TEST_Q } from '../../model/testDocsData';

describe('Response', async () => {
  it('Preloader is shown while data is fetching', async () => {
    // Arrange
    store.dispatch(setLoading(true));
    renderWithProviders(
      <Documentation />,
      { store }
    );

    // Expect
    expect(screen.getByTestId('loader')).toBeVisible();
  });

  it('Query page is shown when clicking on query link', async () => {
    // Arrange
    store.dispatch(setLoading(false));
    store.dispatch(setSchemaQueries({name: "Query"} as SchemaType));
    renderWithProviders(
      <Documentation />,
      { store }
    );

    // Act
    fireEvent.click(screen.getByTestId('query-btn'));

    // Expect
    expect(screen.getByTestId('queries-list')).toBeVisible();
  });

  it('Types page is shown when clicking on type link', async () => {
    // Arrange
    store.dispatch(setQueriesDisplayed(false));
    store.dispatch(setSchemaTypes([{name: "type field"}] as SchemaType[]));
    renderWithProviders(
      <Documentation />,
      { store }
    );

    // Act
    fireEvent.click(screen.getAllByTestId('field-type')[0]);

    // Expect
    expect(screen.getByTestId('type-data')).toBeVisible();
  });

  it('Query item is displayed properly', async () => {
    // Arrange
    store.dispatch(setQueriesDisplayed(false));
    store.dispatch(setSchemaTypes([{name: "type field"}] as SchemaType[]));
    renderWithProviders(
      <Query query={TEST_Q} />,
      { store }
    );

    // Expect
    expect(screen.getByText(TEST_Q.name)).toBeVisible();
    expect(screen.getByText(TEST_Q.type.name)).toBeVisible();
  });
});
