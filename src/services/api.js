import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081',
});

const request = (config) => {
  const onSuccess = (response) => response.data;
  const onError = (error) => Promise.reject(error.response.data);

  return axiosInstance(config)
    .then(onSuccess)
    .catch(onError);
};

export const get = (url, options) => request({
  method: 'get', url, ...options,
});

export const client = axiosInstance;
