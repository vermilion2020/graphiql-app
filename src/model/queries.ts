import { Locales } from './translates';

export type CommonJSON = { [key: string]: string };

export interface RequestQueryData {
  endpoint: string;
  q: string;
  vars: CommonJSON;
  headers: CommonJSON;
  locale: Locales;
}

export interface RequestSchemaData {
  endpoint: string;
  locale: Locales;
}

export const DEFINITION_QUERY =
  'fragment FullType on __Type { kind name fields(includeDeprecated: true) { name args { ...InputValue } type { ...TypeRef } isDeprecated deprecationReason } inputFields { ...InputValue } interfaces { ...TypeRef } enumValues(includeDeprecated: true) { name isDeprecated deprecationReason } possibleTypes { ...TypeRef }}fragment InputValue on __InputValue { name type { ...TypeRef } defaultValue}fragment TypeRef on __Type { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name ofType { kind name } } } } } } }}query IntrospectionQuery { __schema { queryType { name } mutationType { name } types { ...FullType } directives { name locations args { ...InputValue } } }}';

export const BASIC_TYPES_QUERY =
  '{ __schema { queryType { fields { name } } }}';
