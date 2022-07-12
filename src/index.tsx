import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import { AppContextProvider } from "./AppContext";
import Navbar from "./components/navbar/Navbar";
import "./index.scss";
import HomePage from "./routes/home-page/HomePage";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<HomePage />} />
            <Route path="portfolio" element={<>portfolio</>} />
            <Route path="blog" element={<>blog</>} />
            <Route path="contact" element={<>contact</>} />
            <Route path="*" element={<Navigate replace to={"/"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>
);
