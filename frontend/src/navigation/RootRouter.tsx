import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "../pages";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  }
])

export default RootRouter;