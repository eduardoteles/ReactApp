import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ListGroup from "./components/ListGroup";
import Counter from "./components/Counter";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ListGroup />
    <Counter />
  </StrictMode>,
);
