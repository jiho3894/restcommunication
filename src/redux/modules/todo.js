import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, instance } from "../../core/api/axios";

const initialState = {
  todos: [],
  isLoading: false,
};

export const __getTodos = createAsyncThunk("getTodos", async (_, thunkAPI) => {
  try {
    const { data } = await instance.get("/posts");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __postTodos = createAsyncThunk(
  "postTodos",
  async (payload, thunkAPI) => {
    try {
      const { data } = await baseURL.post(`/posts`, payload);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodoDetail = createAsyncThunk(
  "deleteTodoDetail",
  async (payload, thunkAPI) => {
    try {
      await baseURL.delete(`/posts/${payload}`);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(__getTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(__getTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__postTodos.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
    builder.addCase(__deleteTodoDetail.fulfilled, (state, action) => {
      return {
        todos: state.todos.filter((x) => x.id !== Number(action.meta.arg))
      }
    });
  },
});

export default todoSlice.reducer;
