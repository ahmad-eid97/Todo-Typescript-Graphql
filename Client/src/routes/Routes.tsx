// REACT STUFF
import React from 'react';
// REACT ROUTER STUFF
import { createBrowserRouter } from 'react-router-dom';
// COMPONENTS
import Home from '../pages/home/Home'
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
// ROUTES PROTECTION
import { authenticated, notAuthenticated } from './routesProtector';

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
    loader: notAuthenticated
  },
  {
    path: "/login",
    element: <Login />,
    loader: notAuthenticated
  },
  {
    path: "/",
    element: <Home />,
    loader: authenticated
  }
])

export default router;
