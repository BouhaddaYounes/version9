import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from "./App";
import Dashboard from "./pages/Dashboard/Dashboard";
import Station from "./pages/Station/Station";
import Locaux from "./pages/Locaux/Locaux";
import Colaborator from "./pages/Colaborator/Colaborator";
import Contract from "./pages/Contract/Contract";
import Facture from "./pages/Facture/Facture";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="Station" element={<Station />} />
        <Route path="Locaux" element={<Locaux />} />
        <Route path="Colaborator" element={<Colaborator />} />
        <Route path="Contract" element={<Contract />} />
        <Route path="Facture" element={<Facture />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </>
  )
);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);