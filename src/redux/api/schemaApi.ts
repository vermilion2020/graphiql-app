import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISchemaTypes } from '../../model/schema.interface';

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
            "query": "fragment FullType on __Type { kind name fields(includeDeprecated: true) { name args { ...InputValue } type { ...TypeRef } isDeprecated deprecationReason } inputFields { ...InputValue } interfaces { ...TypeRef } enumValues(includeDeprecated: true) { name isDeprecated deprecationReason } possibleTypes { ...TypeRef }}fragment InputValue on __InputValue { name type { ...TypeRef } defaultValue}fragment TypeRef on __Type { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name } } } } } } }}query IntrospectionQuery { __schema { queryType { name } mutationType { name } types { ...FullType } directives { name locations args { ...InputValue } } }}"
          }
        };
        return query;
      },
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (e) {
          console.log(e);
        }
      },
    }),
  }),
});

export const { useLazyGetItemsListQuery } = schemaApi;
