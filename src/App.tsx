import React from "react";
import { Provider } from "react-redux";
import "./assets/styles/App.scss";
import Root from "./pages/Root";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Root />
      </Provider>
    </div>
  );
}

export default App;
