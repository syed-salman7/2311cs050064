import axios from "axios";

const api = axios.create({
  baseURL: "http://24.224.186.213/evaluation-service",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;