import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import FrozenFood from "./components/product/FrozenFood";
import Handicrafts from "./components/product/Handicrafts";
import Home from "./components/Home";
import HomeDecor from "./components/product/HomeDecor";
import Miscellaneous from "./components/product/Miscellaneous";
import OurProducts from "./components/OurProducts";
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
      { path: "products", element: <OurProducts /> },
      { path: "contact", element: <Contact /> },
      { path: "products/frozen-food", element: <FrozenFood /> },
      { path: "products/handicrafts", element: <Handicrafts /> },
      { path: "products/home-decor", element: <HomeDecor /> },
      { path: "products/miscellaneous", element: <Miscellaneous /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
