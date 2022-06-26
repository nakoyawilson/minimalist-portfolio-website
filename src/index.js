import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./reset.css";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import BookmarkProject from "./pages/BookmarkProject";
import FyloProject from "./pages/FyloProject";
import InsureProject from "./pages/InsureProject";
import ManageProject from "./pages/ManageProject";
import ContactMe from "./pages/ContactMe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="bookmark" element={<BookmarkProject />} />
          <Route path="fylo" element={<FyloProject />} />
          <Route path="insure" element={<InsureProject />} />
          <Route path="manage" element={<ManageProject />} />
          <Route path="contact" element={<ContactMe />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
