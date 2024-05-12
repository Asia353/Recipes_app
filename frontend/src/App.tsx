import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { RootRouter } from "./navigation";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={RootRouter} />
    </AuthProvider>
  );
}

export default App;
