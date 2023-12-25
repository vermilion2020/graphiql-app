import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

export interface IAppState {
  uid: null | string;
  exp_token: number | null;
  isLoggedIn: boolean;
  error: string | null;
}

const initialState: IAppState = {
  uid: null,
  exp_token: null,
  isLoggedIn: false,
  error: null,
};

export const AppSlice = createSlice({
  name: 'appSlice',
  initialState,

  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        const decodedToken = jwtDecode(action.payload);
        if (decodedToken.exp) {
          state.exp_token = decodedToken.exp;
        }
        state.error = null;
      }
    },
    setSingIn: (state, action) => {
      if (action.payload) {
        state.uid = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      }
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSignOut: (state) => {
      state.exp_token = null;
      state.isLoggedIn = false;
      state.error = null;
      state.uid = null;
    },
  },
});

export default AppSlice.reducer;

export const { setSingIn, setError, setSignOut, setToken } = AppSlice.actions;
