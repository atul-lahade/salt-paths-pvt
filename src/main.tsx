import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import React from "react";
import RootLayout from "./RootLayout";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
