import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./stylesheet/GlobalStyles";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
