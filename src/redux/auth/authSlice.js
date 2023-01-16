import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null, data: null },
  refreshToken: null,
  isGetCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});
