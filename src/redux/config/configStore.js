import { configureStore } from "@reduxjs/toolkit";
import todo from "../modules/todo";

const store = configureStore({
  reducer: { todo: todo },
});

export default store;
