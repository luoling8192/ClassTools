import axios from 'axios';

const ax = linkBackend();

function linkBackend() {
  return axios.create({
    baseURL: 'http://192.168.1.100:8088',
    timeout: 5000,
  });
}

export default {
  ax: ax,
};
