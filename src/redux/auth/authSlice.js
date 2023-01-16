import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from './authOperation';

const initialState = {
  user: { username: null, email: null },
  sid: null,
  refreshToken: null,
  loadind: false,
  isLoggedIn: false,
  isLoadCurrentUser: false,
  error: null,
};

const handlerPending = state => {
  state.error = null;
  state.loadind = true;
};

const handlerRejected = (state, { payload }) => {
  state.error = payload;
  state.loadind = false;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, handlerPending)
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user.username = payload.username;
        state.user.email = payload.email;
        state.loadind = false;
      })
      .addCase(registerUser.rejected, handlerRejected)

      .addCase(loginUser.pending, handlerPending)
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.user.email = payload.user.email;
        state.user.username = payload.user.username;
        state.loadind = false;
      })
      .addCase(loginUser.rejected, handlerRejected)

      .addCase(refreshUser.pending, (state, _) => {
        state.error = null;
        state.isLoadCurrentUser = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.sid;
        state.isLoadCurrentUser = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.refreshToken = null;
        state.sid = null;
        state.error = payload;
        state.isLoadCurrentUser = false;
      })

      .addCase(logoutUser.pending, handlerPending)
      .addCase(logoutUser.fulfilled, (state, _) => {
        state.refreshToken = null;
        state.sid = null;
        state.user.email = null;
        state.user.username = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.refreshToken = null;
        state.sid = null;
        state.user.email = null;
        state.user.username = null;
        state.isLoggedIn = false;
        state.error = payload;
      });
  },
});
