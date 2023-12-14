import { SchemaType } from "./schema.interface";

export interface IAppState {
  isLoggedIn: boolean;
  error: string | null;
}

export interface IDocumentationState {
  schemaQueries: SchemaType | null;
  schemaTypes: SchemaType[] | null;
  typeDisplayed: string | null;
  queriesDisplayed: boolean;
}

export interface EndpointState {
  endpoint: string
}