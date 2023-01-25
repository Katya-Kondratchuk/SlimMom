import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Api from '../../services/api/base_api';

export const dailyRateOperation = createAsyncThunk(
  'daily/dailyRateId',

  async (value, { rejectWithValue }) => {
    const { id, data } = value;
    console.log(id, data);
    try {
      const dailyRate = await Api.postDailyRateWithId(id, data);
      console.log(dailyRate);
      // if (dailyRate.error) {
      //   return {};
      // }
      return dailyRate;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
