import axios from "axios";

export const instance = axios.create({
  baseURL: "http://13.124.28.246",
});

export const baseURL = axios.create({
  baseURL: "http://13.124.28.246",
});

baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});
