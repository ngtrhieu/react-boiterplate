import axios from 'axios';

// API server to make request to
// https://github.com/axios/axios

export default axios.create({
  url: '/',
  baseURL: process.env.SERVER_URI,
  withCredentials: true,
});
