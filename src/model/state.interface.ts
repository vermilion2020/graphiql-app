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
}

export interface IRequestState {
  endpoint: string;
  response: string;
}
