import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Page as DemoRadioPage } from "./demos/demo-radio/Page";
import { Page as DemoTaskPage } from "./demos/demo-task/Page";
import { Page as DemoUserPage } from "./demos/demo-user/Page";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/demo-radio",
    element: <DemoRadioPage />,
  },
  {
    path: "/demo-task",
    element: <DemoTaskPage />,
  },
  {
    path: "/demo-user",
    element: <DemoUserPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
