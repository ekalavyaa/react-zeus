import axios from 'axios';
import { getToken } from './auth';
import config from '../config/env';

const api = axios.create({
  baseURL: config.apiUrl,
  timeout: 1000,
  responseType: 'json'
});

api.interceptors.request.use((config) => {
  const token = getToken();
  config.headers.Authorization = token;
  return config;
});

export const middlewareConfig = {
  interceptors: {
    request: [{
      success: ({ getState, dispatch, getSourceAction }, req) => {
        console.log(req); // contains information about request object
      },
      error: ({ getState, dispatch, getSourceAction }, error) => {
      }
    }
    ],
    response: [{
      success: ({ getState, dispatch, getSourceAction }, req) => {
        console.log(req); // contains information about request object
      },
      error: ({ getState, dispatch, getSourceAction }, error) => {
      }
    }
    ]
  }
};

export default api;
