import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EndpointState } from '../../model/state.interface';

const initialState: EndpointState = {
  endpoint: '',
};

export const EndpointSlice = createSlice({
  initialState,
  name: 'endpointSlice',
  reducers: {
    setEndpoint: (state, action: PayloadAction<string>) => {
      state.endpoint = action.payload;
    },
  }
});

export default EndpointSlice.reducer;

export const { setEndpoint } =
EndpointSlice.actions; 
