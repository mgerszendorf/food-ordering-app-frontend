import React from "react";
import { Provider } from "react-redux";
import "./assets/styles/App.scss";
import Root from "./pages/Root";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Root />
      </div>
    </Provider>
  );
}

export default App;
