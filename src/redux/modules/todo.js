import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "안녕",
    nickname: "charley",
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state = state + action;
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
