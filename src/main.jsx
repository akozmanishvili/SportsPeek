import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/League",
        lazy: () =>
          import("./pages/League.jsx").then((module) => ({
            element: <module.default></module.default>,
          })),
      },
      {
        path: "/Player",
        lazy: () =>
          import("./pages/Player.jsx").then((module) => ({
            element: <module.default></module.default>,
          })),
      },
      {
        path: "/Team",
        lazy: () =>
          import("./pages/Team.jsx").then((module) => ({
            element: <module.default></module.default>,
          })),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
);
