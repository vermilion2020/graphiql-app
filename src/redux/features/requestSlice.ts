import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRequestState } from '../../model/state.interface';
import { DEFAULT_URL } from '../../model/queries';

const initialState: IRequestState = {
  endpoint: localStorage.getItem('endpoint') ?? DEFAULT_URL,
  response: '',
  loading: false,
  endpointValid: true,
  endpointEdit: false,
};

export const requestSlice = createSlice({
  initialState,
  name: 'requestSlice',
  reducers: {
    setEndpoint: (state, action: PayloadAction<string>) => {
      state.endpoint = action.payload;
    },
    setEndpointEdit: (state, action: PayloadAction<boolean>) => {
      state.endpointEdit = action.payload;
    },
    setEndpointValid: (state, action: PayloadAction<boolean>) => {
      state.endpointValid = action.payload;
    },
    setResponse: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export default requestSlice.reducer;

export const {
  setEndpoint,
  setEndpointValid,
  setEndpointEdit,
  setResponse,
  setLoading,
} = requestSlice.actions;
