import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./common/ChooseField/counterSlice";
import navigationReducer from "./common/Navigation/navigationSlice";

export default configureStore({
  reducer: { counter: counterReducer, navigation: navigationReducer },
});
