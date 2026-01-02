

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api/users",
});

// Signup
export const signupUser = (data) => {
  return API.post("/signup", data);
};

// Login
export const loginUser = (data) => {
  return API.post("/login", data);
};
