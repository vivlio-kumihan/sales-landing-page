import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// StrictModeをコメントアウトしてGSAPとの競合を避ける
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
