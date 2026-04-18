import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Demo from "../pages/Demo";
export function getRouter() {
  return createBrowserRouter([


   
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/demo",
      element: <Demo />,
    },

  ]);
}