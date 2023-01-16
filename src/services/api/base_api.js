import axios from 'axios';

// instance axios
export const authLogin = async () => {
  const response = await axios.post('/login', {});
  const token = response.data.accessToken;
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return response.data;
};
