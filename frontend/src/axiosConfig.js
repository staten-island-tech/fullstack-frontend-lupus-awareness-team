import axios from "axios";

export const HTTP = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: "Bearer {token}",
    "Content-Type": "application/json",
  },
  withCredentials: true
});

export default HTTP