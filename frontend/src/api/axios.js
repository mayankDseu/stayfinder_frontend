
import axios from 'axios';

export default axios.create({
  baseURL: 'https://stayfinder-backend-aqjy.onrender.com/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});
