import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, MainPage } from "../pages";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <MainPage />,
  },
]);

export default RootRouter;
