import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ScrollToTop } from "./components";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { LenisProvider } from "./context/LenisContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LenisProvider>
      <ScrollToTop />
      <App />
    </LenisProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
