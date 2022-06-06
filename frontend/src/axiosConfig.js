import axios from "axios";

export const HTTP = axios.create({
  baseURL: "http://lupus-awareness-backend.onrender.com",
  headers: {
    Authorization: "Bearer {token}",
  },
  withCredentials: true
});

export default HTTP
