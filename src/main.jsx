import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { globalState } from "./redux/store/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={globalState}>
      <App />
    </Provider>
  </BrowserRouter>
);
