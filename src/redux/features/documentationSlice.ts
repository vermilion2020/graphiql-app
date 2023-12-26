import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IDocumentationState } from '../../model/state.interface';
import { SchemaType } from '../../model/schema.interface';

const initialState: IDocumentationState = {
  schemaQueries: null,
  schemaMutations: null,
  schemaTypes: null,
  typeDisplayed: null,
  mutationsDisplayed: false,
  queriesDisplayed: false,
  loading: false,
};

export const documentationSlice = createSlice({
  initialState,
  name: 'documentationSlice',
  reducers: {
    setSchemaQueries: (state, action: PayloadAction<SchemaType>) => {
      state.schemaQueries = action.payload;
    },
    setSchemaMutations: (state, action: PayloadAction<SchemaType>) => {
      state.schemaMutations = action.payload;
    },
    setSchemaTypes: (state, action: PayloadAction<SchemaType[]>) => {
      state.schemaTypes = action.payload;
    },
    setTypeDisplayed: (state, action: PayloadAction<string | null>) => {
      let sType = null;
      if (action.payload) {
        sType = action.payload
          .replace('!', '')
          .replace('[', '')
          .replace(']', '');
      }
      state.typeDisplayed = sType;
    },
    setQueriesDisplayed: (state, action: PayloadAction<boolean>) => {
      state.queriesDisplayed = action.payload;
    },
    setMutationsDisplayed: (state, action: PayloadAction<boolean>) => {
      state.mutationsDisplayed = action.payload;
    },
    clearDocs: (state) => {
      state.schemaQueries = null;
      state.schemaMutations = null;
      state.schemaTypes = null;
      state.queriesDisplayed = false;
      state.mutationsDisplayed = false;
      state.typeDisplayed = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export default documentationSlice.reducer;

export const {
  setSchemaQueries,
  setSchemaTypes,
  setTypeDisplayed,
  setQueriesDisplayed,
  setSchemaMutations,
  setMutationsDisplayed,
  clearDocs,
  setLoading,
} = documentationSlice.actions;
