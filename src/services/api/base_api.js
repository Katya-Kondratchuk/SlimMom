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

// Daily - rate with id
export const postDailyRateWithId = async (id, data) => {
  try {
    const response = await axios.post(`/daily-rate/${id}`, data);
    return response.data;
  } catch (error) {
    return {
      error,
    };
  }
};

// Products
export const getProducts = async value => {
  try {
    const response = await axios.get(`/product?search=${value}`);
    return response.data;
  } catch (error) {
    return {
      error,
    };
  }
};
// Post Dairy Product
export const postProduct = async value => {
  try {
    const response = await axios.post('/day', value);
    return response.data;
  } catch (error) {
    return {
      error,
    };
  }
};
// Delete Dairy Product
export const deleteProduct = async value => {
  console.log(value);
  try {
    const response = await axios.delete('/day', {
      data: value,
    });
    return response.data;
  } catch (error) {
    return {
      error,
    };
  }
};
// Delete Dairy Product
export const getDayProducts = async value => {
  try {
    const response = await axios.post('/day/info', value);
    return response.data;
  } catch (error) {
    return {
      error,
    };
  }
};
