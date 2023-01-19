import { createSlice } from '@reduxjs/toolkit';
import { dailyRateOperation } from './dailyOperation';

export const dailySlice = createSlice({
  name: 'daily',
  initialState: {},
  extraReducers: {
    [dailyRateOperation.fulfilled]: (state, { payload }) => {
      return (state = payload);
    },
  },
});
