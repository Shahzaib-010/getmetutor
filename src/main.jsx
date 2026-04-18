import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { getRouter } from "./router/router"

const router = getRouter();

createRoot(document.getElementById("root")).render(
     
            <RouterProvider router={router} />
      
  
);
