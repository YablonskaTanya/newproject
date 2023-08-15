// import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import Context from "./Context/Context";

import { persistor, store } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Context>
        <PersistGate login={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Context>
    </Provider>
  </BrowserRouter>

  // </StrictMode>
);
