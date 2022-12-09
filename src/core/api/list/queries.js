import { useSweet } from "../../utils/useSweet";
import { baseURL, instance } from "../axios";

export const getTodo = async () => {
  try {
    const { data } = await instance.get("/api/posts/");
    return data;
  } catch (error) {
    useSweet(1000, "error", error.response.data.msg);
  }
};

export const getDetailTodo = async (id) => {
  try {
    const { data } = await instance.get(`/api/posts/${id}`);
    return data;
  } catch (error) {
    useSweet(1000, "error", error.response.data.msg);
  }
};

export const postTodo = async (post) => {
  try {
    const data = await baseURL.post(`/api/posts`, post);
    console.log(data);
    return data;
  } catch (error) {
    useSweet(1000, "error", error.response.data.msg);
  }
};

export const updateTodo = async (id, post) => {
  try {
    const data = await baseURL.put(`/api/posts/${id}`, post);
    return data;
  } catch (error) {
    useSweet(1000, "error", error.response.data.msg);
  }
};

export const deleteTodo = async (id) => {
  try {
    const data = await baseURL.delete(`/api/posts/${id}`);
    return data;
  } catch (error) {
    useSweet(1000, "error", error.response.data.msg);
  }
};
