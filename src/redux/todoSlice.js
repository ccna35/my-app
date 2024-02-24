// todoSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleDone: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      state.todos = [];
    });
  },
});

export const { addTodo, removeTodo, toggleDone } = todoSlice.actions;
export default todoSlice.reducer;
