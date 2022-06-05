import axios from "axios";
// const token = sessionStorage.getItem('auth-token')

export const HTTP = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer {token}`,
    'Content-type': 'application/json; charset=UTF-8',
  },
  withCredentials: true
});

export default HTTP
