import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISchemaTypes, SchemaType } from '../../model/schema.interface';
import { BASIC_TYPES_QUERY, DEFINITION_QUERY } from '../../model/queries';
import { setError } from '../features/appSlice';
import { setSchemaQueries, setSchemaTypes } from '../features/documentationSlice';
import { setEndpoint, setResponse } from '../features/requestSlice';

export const schemaApi = createApi({
  reducerPath: 'schemaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  tagTypes: ['schema'],
  endpoints: (builder) => ({
    getSchema: builder.query<ISchemaTypes, string>({
      query: (endpoint: string) => {
        const query = {
          url: endpoint,
          method: 'POST',
          body: {
            query: DEFINITION_QUERY
          }
        };
        return query;
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          const schemaQuery = data?.data.__schema.types
            .find(s => s.name === data?.data.__schema.queryType.name) as SchemaType;
          const types = data?.data.__schema.types
            .filter(s => s.name !== data?.data.__schema.queryType.name);

          dispatch(setSchemaQueries(schemaQuery));
          dispatch(setSchemaTypes(types));
        } catch (e) {
          dispatch(setError('Invalid URL is provided. Scheme check request was failed'));
          console.log(e);
        }
      },
    }),
    checkSchema: builder.query<ISchemaTypes, string>({
      query: (endpoint: string) => {
        const query = {
          url: endpoint,
          method: 'POST',
          body: {
            query: BASIC_TYPES_QUERY
          }
        };
        return query;
      },
      async onQueryStarted(url, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            dispatch(setError(null));
            localStorage.setItem('endpoint', url);
            dispatch(setEndpoint(url));
          }
        } catch (e) {
          dispatch(setError('Invalid URL is provided. Scheme check request was failed'));
          console.log(e);
        }
      },
    }),
    sendRequest: builder.query<ISchemaTypes, { endpoint: string, q: string }>({
      query: ({endpoint, q}: { endpoint: string, q: string }) => {
        const query = {
          url: endpoint,
          method: 'POST',
          body: {
            query: q
          }
        };
        return query;
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            dispatch(setError(null));
            dispatch(setResponse(JSON.stringify(data)));
          }
        } catch (e) {
          dispatch(setError('Invalid query'));
          dispatch(setResponse(''));
          console.log(e);
        }
      },
    }),
  }),
});

export const { useLazyGetSchemaQuery, useLazyCheckSchemaQuery, useLazySendRequestQuery } = schemaApi;
