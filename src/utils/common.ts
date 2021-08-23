import axios from 'axios';

const ax = linkBackend();

function linkBackend() {
  return axios.create({
    baseURL: 'http://localhost:8088',
    timeout: 5000,
  });
}

export default {
  ax: ax,
};
