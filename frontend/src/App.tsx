import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { RootRouter } from './navigation';

function App() {
  return (
    <RouterProvider router={RootRouter} />
  );
}

export default App;
