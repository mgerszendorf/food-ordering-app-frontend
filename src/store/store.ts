import { configureStore } from "@reduxjs/toolkit";
import { menuState } from "./reducers/reducers";

const store = configureStore({
  reducer: {
    menuState: menuState,
  },
});

export default store;
