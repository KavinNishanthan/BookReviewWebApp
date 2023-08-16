import axios from 'axios';
import { storage } from '../utils/storage.js';

let axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config) => {
  const token = storage.getToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const getRequest = ({ path, success, error, config }) => {
  axiosInstance
    .get(path, {
      ...config
    })
    .then(success)
    .catch(error);
};

const postRequest = ({ path, data, success, error, config }) => {
  axiosInstance
    .post(path, data, {
      ...config
    })
    .then(success)
    .catch(error);
};

const putRequest = ({ path, data, success, error, config }) => {
  axiosInstance
    .put(path, data, {
      ...config
    })
    .then(success)
    .catch(error);
};

const deleteRequest = ({ path, data, success, error, config }) => {
  axiosInstance
    .delete(path, data, {
      ...config
    })
    .then(success)
    .catch(error);
};

export const httpRequest = {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
};
