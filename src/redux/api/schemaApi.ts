import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISchemaTypes, SchemaType } from '../../model/schema.interface';
import {
  BASIC_TYPES_QUERY,
  DEFINITION_QUERY,
  RequestQueryData,
  RequestSchemaData,
} from '../../model/queries';
import { setError } from '../features/appSlice';
import {
  clearDocs,
  setLoading,
  setSchemaMutations,
  setSchemaQueries,
  setSchemaTypes,
} from '../features/documentationSlice';
import {
  setEndpoint,
  setEndpointEdit,
  setEndpointValid,
  setResponse,
  setLoading as setRLoading,
} from '../features/requestSlice';
import { en, ru } from '../../model/translates';

export const schemaApi = createApi({
  reducerPath: 'schemaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  tagTypes: ['schema'],
  endpoints: (builder) => ({
    getSchema: builder.query<ISchemaTypes, RequestSchemaData>({
      query: ({ endpoint }: RequestSchemaData) => {
        const query = {
          url: endpoint,
          method: 'POST',
          body: {
            query: DEFINITION_QUERY,
          },
        };
        return query;
      },
      async onQueryStarted(requestData, { dispatch, queryFulfilled }) {
        const { locale } = requestData;
        try {
          dispatch(setLoading(true));
          const { data } = await queryFulfilled;
          const schema = data?.data.__schema;
          let types = schema.types.filter((t) => !t.name.includes('__'));

          if (schema.mutationType && schema.mutationType.name) {
            const schemaMutation = schema.types.find(
              (t) => t.name === schema.mutationType.name
            ) as SchemaType;
            dispatch(setSchemaMutations(schemaMutation));
            types = types.filter((t) => t.name !== schema.mutationType.name);
          }

          if (schema.queryType && schema.queryType.name) {
            const schemaQuery = schema.types.find(
              (t) => t.name === schema.queryType.name
            ) as SchemaType;
            dispatch(setSchemaQueries(schemaQuery));
            types = types.filter((t) => t.name !== schema.queryType.name);
          }

          dispatch(setSchemaTypes(types));
          dispatch(setLoading(false));
        } catch (e) {
          const error =
            locale === 'Ru'
              ? ru.errorMessages['request/url']
              : en.errorMessages['request/url'];

          dispatch(setError(error));
          dispatch(setLoading(false));
          console.log(e);
        }
      },
    }),
    checkSchema: builder.query<ISchemaTypes, RequestSchemaData>({
      query: ({ endpoint }: RequestSchemaData) => {
        const query = {
          url: endpoint,
          method: 'POST',
          body: {
            query: BASIC_TYPES_QUERY,
          },
        };
        return query;
      },
      async onQueryStarted(requestData, { dispatch, queryFulfilled }) {
        const { endpoint, locale } = requestData;
        dispatch(clearDocs());
        dispatch(setResponse(''));
        try {
          const { data } = await queryFulfilled;
          if (data) {
            dispatch(setError(null));
            localStorage.setItem('endpoint', endpoint);
            dispatch(setEndpoint(endpoint));
            dispatch(setEndpointValid(true));
            dispatch(setEndpointEdit(false));
          }
        } catch (e) {
          const error =
            locale === 'Ru'
              ? ru.errorMessages['request/docs']
              : en.errorMessages['request/docs'];

          dispatch(setError(error));
          dispatch(setEndpointValid(false));
          console.log(e);
        }
      },
    }),
    sendRequest: builder.query<ISchemaTypes, RequestQueryData>({
      query: ({ endpoint, q, vars, headers }: RequestQueryData) => {
        const query = {
          url: endpoint,
          method: 'POST',
          body: {
            query: q,
            variables: vars,
          },
          headers: headers,
        };
        return query;
      },
      async onQueryStarted(requestData, { dispatch, queryFulfilled }) {
        const { locale } = requestData;
        try {
          dispatch(setRLoading(true));
          const { data } = await queryFulfilled;
          if (data) {
            dispatch(setError(null));
            dispatch(setResponse(JSON.stringify(data)));
            dispatch(setRLoading(false));
          }
        } catch (e) {
          const error =
            locale === 'Ru'
              ? ru.errorMessages['request/query']
              : en.errorMessages['request/query'];

          dispatch(setError(error));
          dispatch(setResponse(''));
          dispatch(setRLoading(false));
          console.log(e);
        }
      },
    }),
  }),
});

export const {
  useLazyGetSchemaQuery,
  useLazyCheckSchemaQuery,
  useLazySendRequestQuery,
} = schemaApi;
