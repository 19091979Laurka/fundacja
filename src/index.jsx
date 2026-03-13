import "./polyfills";
import React from "react";
import { createRoot } from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import Foundation from "./Foundation";

const rootElement = document.getElementById("root");

const renderApp = () => (
  <React.StrictMode>
    <HashRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Foundation />
    </HashRouter>
  </React.StrictMode>
);

const root = createRoot(rootElement);
root.render(renderApp());

if (import.meta.hot) {
  import.meta.hot.accept("./Foundation", () => {
    root.render(renderApp());
  });
}
