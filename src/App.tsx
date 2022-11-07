import React from 'react';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Auth from './pages/auth/Auth';
import Admin from './pages/admin/Admin';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
