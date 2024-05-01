import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../Main";

const router = createBrowserRouter([
    // { path: "/", element: <Test /> },
    // { path: "/todo", element: <Todo /> },
    { path: "/", element: <Main/> },
]);
export default function Routes() {
    return <RouterProvider router={router} />;
  }