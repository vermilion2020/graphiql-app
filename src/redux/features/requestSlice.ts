import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRequestState } from '../../model/state.interface';

const initialState: IRequestState = {
  endpoint: localStorage.getItem('endpoint') ?? '',
  response: '',
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
  },
});

export default requestSlice.reducer;

export const { setEndpoint, setResponse } = requestSlice.actions;
