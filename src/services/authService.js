
import axios from 'axios';

export const login = (username, password) => {
  return axios.post('/api/login', { username, password });
};
