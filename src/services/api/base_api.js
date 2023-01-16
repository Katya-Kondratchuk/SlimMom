import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

// Daily - rate
export const postDailyRate = async data => {
  try {
    const response = await axios.post('/daily-rate', data);
    return response.data;
  } catch (error) {
    return {
      error,
    };
  }
};
