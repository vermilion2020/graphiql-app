import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRequestState } from '../../model/state.interface';

const initialState: IRequestState = {
  endpoint: localStorage.getItem('endpoint') ?? '',
  response: '',
  loading: false,
};

export const requestSlice = createSlice({
  initialState,
  name: 'requestSlice',
  reducers: {
    setEndpoint: (state, action: PayloadAction<string>) => {
      state.endpoint = action.payload;
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

export const { setEndpoint, setResponse, setLoading } = requestSlice.actions;
