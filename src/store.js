import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./common/ChooseField/counterSlice";

export default configureStore({
  reducer: { counter: counterReducer },
});
