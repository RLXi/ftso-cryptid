import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <MantineProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </MantineProvider>,
  document.getElementById("root")
);
