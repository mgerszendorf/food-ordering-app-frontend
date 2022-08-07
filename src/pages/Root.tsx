import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar/Sidebar";

function Root() {
  return (
    <>
      <Provider store={store}>
        <NavigationBar />
        <Sidebar />
      </Provider>
    </>
  );
}

export default Root;
