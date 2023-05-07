import axios from 'axios';

const Axios = axios.create({
  baseURL: "http://localhost:9999",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

export default Axios;