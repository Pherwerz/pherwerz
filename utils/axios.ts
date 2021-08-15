import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.url}`,
  headers: {
    Authorization: `Bearer ${process.env.token}`
  }
});

export default instance;
