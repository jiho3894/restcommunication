/* eslint-disable react-hooks/rules-of-hooks */
import { useSweet } from "../../utils/useSweet";
import { instance } from "../axios";

export const postLogin = async (post) => {
  try {
    const data = await instance.post("/login", post);
    return data;
  } catch (error) {
    useSweet(1000, "error", error.response.data.msg);
  }
};

export const postSignup = async (post) => {
  try {
    const data = await instance.post("/users", post);
    useSweet(1000, "success", "회원가입 성공");
    return data;
  } catch (error) {
    useSweet(1000, "error", error.response.data.msg);
  }
};
