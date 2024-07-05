import { Navigate, createBrowserRouter } from "react-router-dom";
import {Login, Register} from "@views/auth/index"
import { NotFound } from "./views/NotFound";
import { Home } from "./views/Home";
import { DefaultLayout } from "./components/DefaultLayout";
import { GuestLayout } from "./components/GuestLayout";

export const router = createBrowserRouter( [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path:'/',
        element:<Navigate to="/home" />
      },
      {
        path: '/home',
        element: <Home />
      }
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children:[
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  },
])