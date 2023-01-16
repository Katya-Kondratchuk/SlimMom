import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null, data: null },
  refreshToken: null,
  isLoggedIn: false,
  isLoadCurrentUser: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    // builder
    // .addCase(, (state, action) => {
    //   // action is inferred correctly here if using TS
    // })
  },
});
