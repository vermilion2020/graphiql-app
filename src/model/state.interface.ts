import { SchemaType } from './schema.interface';

export interface IAppState {
  isLoggedIn: boolean;
  error: string | null;
}

export interface IDocumentationState {
  schemaQueries: SchemaType | null;
  schemaMutations: SchemaType | null;
  schemaTypes: SchemaType[] | null;
  typeDisplayed: string | null;
  queriesDisplayed: boolean;
  mutationsDisplayed: boolean;
  loading: boolean;
}

export interface IRequestState {
  endpoint: string;
  response: string;
  loading: boolean;
  endpointValid: boolean;
  endpointEdit: boolean;
}

export interface IEditorState {
  collapsed: boolean;
  visibleTab: 'vars' | 'headers';
  query: string;
  vars: string;
  headers: string;
}
