import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import NavigationBar from "../components/NavigationBar";

function Root() {
  return (
    <>
      <Provider store={store}>
        <NavigationBar />
      </Provider>
    </>
  );
}

export default Root;
