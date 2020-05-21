import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-21563.firebaseio.com/'
});

export default instance;