import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { getRouter } from "./router/router";
import { BlogProvider } from "./context/BlogContext";

const router = getRouter();

createRoot(document.getElementById("root")).render(
  <BlogProvider>
    <RouterProvider router={router} />
  </BlogProvider>
);
