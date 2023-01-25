import { createSlice } from '@reduxjs/toolkit';
import { dailyRateOperation } from './dailyOperation';

export const dailySlice = createSlice({
  name: 'daily',
  initialState: {},
  extraReducers: {
    [dailyRateOperation.fulfilled]: (state, { payload }) => {
      console.log(payload);
      if (payload.error) {
        return state;
      }

      return (state = payload);
    },
    [dailyRateOperation.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});
