import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISchemaTypes, SchemaType } from '../../model/schema.interface';
import { BASIC_TYPES_QUERY, DEFINITION_QUERY, RequestQueryData } from '../../model/queries';
import { setError } from '../features/appSlice';
import { setSchemaMutations, setSchemaQueries, setSchemaTypes } from '../features/documentationSlice';
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
          const schema = data?.data.__schema;
          let types = schema.types.filter(t => !t.name.includes('__'));
          
          if (schema.mutationType && schema.mutationType.name) {
            const schemaMutation = schema.types
            .find(t => t.name === schema.mutationType.name) as SchemaType;
            dispatch(setSchemaMutations(schemaMutation));
            types = types.filter(t => t.name !== schema.mutationType.name);
          }

          if (schema.queryType && schema.queryType.name) {
            const schemaQuery = schema.types
            .find(t => t.name === schema.queryType.name) as SchemaType;
            dispatch(setSchemaQueries(schemaQuery));
            types = types.filter(t => t.name !== schema.queryType.name);
          }

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
    sendRequest: builder.query<ISchemaTypes, RequestQueryData>({
      query: ({endpoint, q, vars, headers}: RequestQueryData) => {
        const query = {
          url: endpoint,
          method: 'POST',
          body: {
            query: q,
            variables: vars
          },
          headers: headers
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
