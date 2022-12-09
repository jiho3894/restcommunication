import axios from "axios";

export const instance = axios.create({
  baseURL: "http://13.124.28.246",
});

instance.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  config.headers["authorization"] = `Bearer ${token}`;
  return config;
});
