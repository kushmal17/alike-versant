import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // future backend URL
});

// Automatically attach user if needed
API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    req.headers.Authorization = `Bearer ${user?.token || ""}`;
  }
  return req;
});

export default API;
