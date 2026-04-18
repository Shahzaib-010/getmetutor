import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Demo from "../pages/Demo";
import Layout from "../layout/Layout";
export function getRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "demo",
          element: <Demo />,
        },
      ],
    },

  ]);
}