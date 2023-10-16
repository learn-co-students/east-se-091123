import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import DefaultChild from "./components/Defaultchild";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import ProjectDetails from "./components/ProjectDetails";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error in app</div>,
    children: [
      { index: true, element: <DefaultChild /> },
      {
        path: "/projects",
        element: <ProjectList />,
      },
      {
        path: "/projects/new",
        element: <ProjectForm />,
      },
      {
        path: "/projects/:projectId",
        element: <ProjectDetails />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
