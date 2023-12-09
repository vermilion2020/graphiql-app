import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAppState } from '../../model/state.interface';

const initialState: IAppState = {
  isLoggedIn: false
};

export const AppSlice = createSlice({
  initialState,
  name: 'appSlice',
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  }
});

export default AppSlice.reducer;

export const { setLoggedIn } =
AppSlice.actions; 
