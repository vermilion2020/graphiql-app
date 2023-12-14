import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAppState } from '../../model/state.interface';

const initialState: IAppState = {
  isLoggedIn: false,
  error: null,
};

export const AppSlice = createSlice({
  initialState,
  name: 'appSlice',
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  }
});

export default AppSlice.reducer;

export const { setLoggedIn, setError } =
AppSlice.actions; 
