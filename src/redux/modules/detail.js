import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, instance } from "../../core/api/axios";

const initialState = {
  todos: [],
  isLoading: false,
};

export const __getTodoDetail = createAsyncThunk(
  "getTodoDetail",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/posts/${payload}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateTodoDetail = createAsyncThunk(
  "updateTodoDetail",
  async (payload, thunkAPI) => {
    try {
      const obj = {
        title: payload.title,
        content: payload.content,
      };
      await baseURL.put(`/api/posts/${payload.id}`, obj);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const todoDetailSlice = createSlice({
  name: "todoDetail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(__getTodoDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__getTodoDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(__getTodoDetail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__updateTodoDetail.fulfilled, (state, action) => {
      state.todos.content = action.meta.arg.content;
    });
  },
});

export default todoDetailSlice.reducer;
