// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Appcontextprovider } from "./context/Appcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Appcontextprovider>
        <App />
      </Appcontextprovider>
    </BrowserRouter>
  </React.StrictMode>
);
