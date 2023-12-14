import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import errorMap from '../../utils/errorMap';

export interface IAppState {
  uid: string | null;
  isLoggedIn: boolean;
  isSignedUp: boolean;
  authError: string | null;
}


const initialState: IAppState = {
  uid: null,
  isLoggedIn: false,
  isSignedUp: false,
  authError: null,
};

export const AppSlice = createSlice({
  name: 'appSlice',
  initialState,

  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setSingIn: (state, action) => {
      console.log('state.uid', action.payload);
      state.uid = action.payload;
      state.isLoggedIn = true;
    },
    setSingUp: (state, action) => {
      state.isSignedUp = action.payload;
    },
    setAuthError: (state, action) => {
      state.authError = errorMap(action.payload);
    },


  },

});

export default AppSlice.reducer;

export const { setLoggedIn, setSingUp, setSingIn, setAuthError } = AppSlice.actions;
