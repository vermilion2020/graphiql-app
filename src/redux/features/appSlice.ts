import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

export interface IAppState {
  uid: null | string;
  expToken: number | null;
  isLoggedIn: boolean;
  error: string | null;
}

const initialState: IAppState = {
  uid: null,
  expToken: null,
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
          state.expToken = decodedToken.exp;
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
      state.expToken = null;
      state.isLoggedIn = false;
      state.error = null;
      state.uid = null;
    },
  },
});

export default AppSlice.reducer;

export const { setSingIn, setError, setSignOut, setToken } = AppSlice.actions;
