import { describe, it } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../test-utils';
import { store } from '../../../redux';
import {
  BASIC_TYPES_QUERY,
  TEST_QUERY,
  TEST_VARS,
} from '../../../model/queries';
import { mswServer } from '../../../setupTests';
import { GET_DOCS, IRequest, SEND_QUERY } from '../../../mock';
import Toolbar from './Toolbar';
import { setQuery, setVars } from '../../../redux/features/editorSlice';
import { prettifyQuery } from '../../../utils/prettify';
import { DOCS_TEST_DATA } from '../../../model/testDocsData';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../../../App';
import { setSingIn, setTestMode } from '../../../redux/features/appSlice';

describe('Toolbar', async () => {
  it('Query is sent to the server when clicking Run Query button', async () => {
    mswServer.use(SEND_QUERY);
    // Arrange
    store.dispatch(setQuery(TEST_QUERY));
    store.dispatch(setVars(TEST_VARS));
    renderWithProviders(<Toolbar />, { store });

    // Act
    fireEvent.click(screen.getByTestId('run-query-btn'));
    await waitFor(
      () => expect(store.getState().requestState.loading).toBeFalsy(),
      {
        timeout: 5000,
      }
    );

    // Expect
    const results = JSON.parse(store.getState().requestState.response) as {
      data: IRequest;
    };
    expect(results.data.query).toEqual(TEST_QUERY);
    expect(JSON.stringify(results.data.variables, null, 2)).toEqual(TEST_VARS);
  });

  it('Query is prettified when clicking Prettify button', async () => {
    // Arrange
    store.dispatch(setQuery(BASIC_TYPES_QUERY));
    renderWithProviders(<Toolbar />, { store });

    // Act
    fireEvent.click(screen.getByTestId('prettify-btn'));
    const prettifiedQuery = prettifyQuery(BASIC_TYPES_QUERY);

    // Expect
    expect(store.getState().editorState.query).toEqual(prettifiedQuery.query);
  });

  it('An error shown when try to prettify invalid query', async () => {
    // Arrange
    store.dispatch(setSingIn(true));
    store.dispatch(setTestMode(true));
    store.dispatch(setQuery('{() query'));
    renderWithProviders(
      <MemoryRouter initialEntries={['/main']}>
        <App />
      </MemoryRouter>,
      { store }
    );

    // Act
    fireEvent.click(screen.getByTestId('prettify-btn'));

    // Expect
    expect(screen.getByTestId('error-message')).toBeVisible();
  });

  it('Documentation is set when clicking Show docs button', async () => {
    // Arrange
    const schema = DOCS_TEST_DATA.data.__schema;
    const schemaQuery = schema.types.find(
      (t) => t.name === schema.queryType.name
    );
    mswServer.use(GET_DOCS);
    renderWithProviders(<Toolbar />, { store });

    // Act
    fireEvent.click(screen.getByTestId('show-docs-btn'));
    await waitFor(
      () => expect(store.getState().documentationState.loading).toBeFalsy(),
      {
        timeout: 5000,
      }
    );
    // Expect
    expect(
      JSON.stringify(store.getState().documentationState.schemaQueries)
    ).toEqual(JSON.stringify(schemaQuery));
  });

  it('Documentation is hidden when clicking Hide docs button', async () => {
    // Arrange
    mswServer.use(GET_DOCS);
    renderWithProviders(<Toolbar />, { store });

    fireEvent.click(screen.getByTestId('hide-docs-btn'));
    await waitFor(
      () => expect(store.getState().documentationState.loading).toBeFalsy(),
      {
        timeout: 5000,
      }
    );

    // Expect
    expect(store.getState().documentationState.schemaQueries).toBeNull();
  });

  it('Info popup is shown when clicking Info button', async () => {
    // Arrange
    renderWithProviders(<Toolbar />, { store });

    // Act
    fireEvent.click(screen.getByTestId('info-btn'));

    // Expect
    expect(screen.getByTestId('info-popup')).toBeVisible();
  });
});
