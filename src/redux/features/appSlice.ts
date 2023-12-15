import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IAppState {
  uid: string | null;
  isLoggedIn: boolean;
  error: string | null;
}

const initialState: IAppState = {
  uid: null,
  isLoggedIn: false,
  error: null,
};

export const AppSlice = createSlice({
  name: 'appSlice',
  initialState,

  reducers: {
    setSingIn: (state, action) => {
      state.uid = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSignOut: (state) => {
      state.uid = null;
      state.isLoggedIn = false;
      state.error = null;
    },
  },

});

export default AppSlice.reducer;

export const { setSingIn, setError, setSignOut } = AppSlice.actions;
