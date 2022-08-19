import { configureStore } from "@reduxjs/toolkit";
import {
  menuState,
  sidebarSlidingElementState,
} from "./reducers/navigationElementsReducer";

import {
  signInState,
  signUpState,
  forgotPasswordState,
} from "./reducers/authenticationPopupsReducer";

const store = configureStore({
  reducer: {
    sidebarSlidingElementState,
    menuState,
    signInState,
    signUpState,
    forgotPasswordState,
  },
});

export default store;
