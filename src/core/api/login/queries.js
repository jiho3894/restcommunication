import { useSweet } from "../../utils/useSweet";
import { instance } from "../axios";

export const postLogin = async (post) => {
  try {
    const data = await instance.post("/api/auth/login", post);
    return data;
  } catch (error) {
    useSweet(1000, "error", error.response.data.msg);
  }
};

export const postSignup = async (post) => {
  try {
    const data = await instance.post("/api/auth/signup", post);
    return data;
  } catch (error) {
    useSweet(1000, "error", error.response.data.msg);
  }
};
