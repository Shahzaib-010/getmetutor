import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Demo from "../pages/Demo";
import Layout from "../layout/Layout";
import Pricing from "../pages/Pricing";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import { BlogProvider } from "../context/BlogContext";
import Syllabus from "../pages/Syllabus";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import About from "../pages/About";
import RefundPolicy from "../pages/RefundPolicy";

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
          path: "/demo",
          element: <Demo />,
        },
        {
          path: "#howitworks",
          element: <Navigate to="/#howitworks" />,
        
        },
        {
          path: "curriculum",
          element: <Syllabus />,
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
        {
          path: "blogs/:slug",
          element: <BlogDetails />,
        },
        {
          path: "privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "terms",
          element: <Terms />,
        },
        {
          path: "refund-policy",
          element: <RefundPolicy />,
        },
      ],
    },
  ]);
}