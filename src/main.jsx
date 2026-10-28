
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";

// Prevent the browser from restoring the previous scroll position.
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

// Start at the top on a normal page load or refresh.
// Preserve direct links such as /#projects.
if (!window.location.hash) {
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);

  requestAnimationFrame(() => {
    document.documentElement.style.scrollBehavior = "";
  });
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
