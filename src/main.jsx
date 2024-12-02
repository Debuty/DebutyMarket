import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StrictMode } from "react";

import { ToastContainer} from"react-toastify"

import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./Context/UserContextProvider";

import 'react-toastify/dist/ReactToastify.css';

const Root = ReactDOM.createRoot(document.querySelector("#root"));

Root.render(
  <BrowserRouter>
  <UserContextProvider>
    <ToastContainer/>
    <App />
    </UserContextProvider>
  </BrowserRouter>
);

{
  /* <StrictMode> </StrictMode> */
}
