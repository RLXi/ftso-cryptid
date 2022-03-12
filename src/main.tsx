import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { MantineProvider } from "@mantine/core";
import { SetupProvider } from "./SetupContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <MantineProvider>
    <SetupProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </SetupProvider>
  </MantineProvider>,
  document.getElementById("root")
);
