import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CoinApp from "./CoinApp";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CoinApp />
  </React.StrictMode>
);
