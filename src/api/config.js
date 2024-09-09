import axios from 'axios';

export default axios.create({
  // common base url is entere here
  baseURL: 'https://tor.appdevelopers.mobi/api/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
