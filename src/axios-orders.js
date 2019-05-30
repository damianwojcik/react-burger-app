import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-f8231.firebaseio.com/',
});

export default instance;
