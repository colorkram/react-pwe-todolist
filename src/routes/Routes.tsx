import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Todo from "../Todo";
import Test from "../Test";
import CurrencyConverter from "../Cal";
import Exp from "../Exp";

const router = createBrowserRouter([
    { path: "/", element: <Test /> },
    { path: "/todo", element: <Todo /> },
    { path: "/cal", element: <CurrencyConverter /> },
    { path: "/exp", element: <Exp/> },
]);
export default function Routes() {
    return <RouterProvider router={router} />;
  }