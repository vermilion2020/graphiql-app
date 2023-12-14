import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISchemaTypes, SchemaType } from '../../model/schema.interface';
import { DEFINITION_QUERY } from '../../model/definition-query';
import { setError } from '../features/appSlice';
import { setSchemaQueries, setSchemaTypes } from '../features/documentationSlice';

export const schemaApi = createApi({
  reducerPath: 'schemaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  tagTypes: ['schema'],
  endpoints: (builder) => ({
    getItemsList: builder.query<ISchemaTypes, string>({
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
          console.log(data?.data.__schema.types);

          const schemaQuery = data?.data.__schema.types
            .find(s => s.name === data?.data.__schema.queryType.name) as SchemaType;
          const types = data?.data.__schema.types
            .filter(s => s.name !== data?.data.__schema.queryType.name);

          dispatch(setSchemaQueries(schemaQuery));
          dispatch(setSchemaTypes(types));
        } catch (e) {
          const err = e as string;
          dispatch(setError(err));
          console.log(err);
        }
      },
    }),
  }),
});

export const { useLazyGetItemsListQuery } = schemaApi;
