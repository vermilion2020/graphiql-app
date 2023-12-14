import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IDocumentationState } from '../../model/state.interface';
import { SchemaType } from '../../model/schema.interface';

const initialState: IDocumentationState = {
  schemaQueries: null,
  schemaTypes: null,
  typeDisplayed: null
};

export const documentationSlice = createSlice({
  initialState,
  name: 'documentationSlice',
  reducers: {
    setSchemaQueries: (state, action: PayloadAction<SchemaType>) => {
      state.schemaQueries = action.payload;
    },
    setSchemaTypes: (state, action: PayloadAction<SchemaType[]>) => {
      state.schemaTypes = action.payload;
    },
    setTypeDisplayed: (state, action: PayloadAction<string | null>) => {
      state.typeDisplayed = action.payload;
    },
  }
});

export default documentationSlice.reducer;

export const { setSchemaQueries, setSchemaTypes, setTypeDisplayed } =
documentationSlice.actions; 
