import { createSlice } from '@reduxjs/toolkit';
import errorMap from '../../utils/errorMap';

export interface IAppState {
  uid: string | null;
  isLoggedIn: boolean;
  authError: string | null;
}

const initialState: IAppState = {
  uid: null,
  isLoggedIn: false,
  authError: null,
};

export const AppSlice = createSlice({
  name: 'appSlice',
  initialState,

  reducers: {
    setSingIn: (state, action) => {
      state.uid = action.payload;
      state.isLoggedIn = true;
      state.authError = null;
    },
    setAuthError: (state, action) => {
      state.authError = errorMap(action.payload);
    },
    setSignOut: (state) => {
      state.uid = null;
      state.isLoggedIn = false;
      state.authError = null;
    },


  },

});

export default AppSlice.reducer;

export const { setSingIn, setAuthError, setSignOut } = AppSlice.actions;
