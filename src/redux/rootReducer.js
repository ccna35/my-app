// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  todos: todoReducer,
  auth: authReducer,
});

export const resetState = () => ({ type: "RESET" });

const combinedReducer = (state, action) => {
  if (action.type === "RESET") {
    state = undefined;
  }

  return rootReducer(state, action);
};

export default combinedReducer;
