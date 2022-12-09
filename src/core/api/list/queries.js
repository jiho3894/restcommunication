import { instance } from "../axios";

export const getTodo = async () => {
  try {
    const { data } = await instance.get("/api/posts/");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailTodo = async (id) => {
  try {
    const { data } = await instance.get(`/api/posts/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postTodo = async (post) => {
  try {
    const data = await instance.post(`/api/posts`, post);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (id, post) => {
  try {
    const data = instance.put(`/api/posts/${id}`, post);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const data = instance.delete(`/api/posts/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
