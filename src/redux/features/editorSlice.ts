import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IEditorState } from '../../model/state.interface';

const initialState: IEditorState = {
  collapsed: false,
  visibleTab: 'vars',
  query: '',
  vars: '',
  headers: '',
  infoDisplayed: false,
};

export const editorSlice = createSlice({
  initialState,
  name: 'editorSlice',
  reducers: {
    setCollapsed: (state, action: PayloadAction<boolean>) => {
      state.collapsed = action.payload;
    },
    setVisibleTab: (state, action: PayloadAction<'vars' | 'headers'>) => {
      state.visibleTab = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setVars: (state, action: PayloadAction<string>) => {
      state.vars = action.payload;
    },
    setHeaders: (state, action: PayloadAction<string>) => {
      state.headers = action.payload;
    },
    setInfoDisplayed: (state, action: PayloadAction<boolean>) => {
      state.infoDisplayed = action.payload;
    },
  },
});

export default editorSlice.reducer;

export const { setCollapsed, setVisibleTab, setQuery, setVars, setHeaders, setInfoDisplayed } = editorSlice.actions;
