import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: "Bearer {token}",
  },
  withCredentials: true
});

export default HTTP;