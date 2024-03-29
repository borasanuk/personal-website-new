import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import { AppContextProvider } from "./AppContext";
import "./index.scss";
import "./common/fonts/font.css";
import BlogViewPage from "./routes/blog-view-page/BlogViewPage";
import BlogPage from "./routes/blogs-page/BlogPage";
import HomePage from "./routes/home-page/HomePage";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AppContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<HomePage />} />
          <Route path="works" element={<BlogPage />} />
          <Route path="works/:id" element={<BlogViewPage />} />
          <Route
            path="aos"
            element={<Navigate replace to={"/works/KIQQkZhA8A9T2AKJqWoc"} />}
          />
          <Route path="*" element={<Navigate replace to={"/"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppContextProvider>
);
