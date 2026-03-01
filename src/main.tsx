import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ListGroup from "./components/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ListGroup />
  </StrictMode>,
);
