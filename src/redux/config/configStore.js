import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todo";
import detail from "../modules/detail";

const store = configureStore({
  reducer: { todos, detail },
});

export default store;
