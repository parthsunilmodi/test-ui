import axios from 'axios';

const axiosI = axios.create({
  baseURL: process.env.REACT_APP_DEVELOPMENT_API_URL,
});

axiosI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token !== null) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default axiosI;
