import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Demo from "../pages/Demo";
import Layout from "../layout/Layout";
import Pricing from "../pages/Pricing";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import { BlogProvider } from "../context/BlogContext";

export function getRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: (
        <BlogProvider>
          <Layout />
        </BlogProvider>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "demo",
          element: <Demo />,
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
        {
          path: "blogs/:slug",
          element: <BlogDetails />,
        },
      ],
    },
  ]);
}