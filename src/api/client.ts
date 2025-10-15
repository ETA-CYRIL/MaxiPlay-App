import axios from 'axios';

const client = axios.create({
  baseURL: 'https://maxiplay-server.onrender.com',
});

export default client;
