import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedConferences from './components/AppliedConferences/AppliedConferences';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ConferenceDetails from './components/ConferenceDetails/ConferenceDetails';
import AuthProvider from './Hook/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedConferences></AppliedConferences>,
        loader: () => fetch('../conference.json')
      },
      {
        path: '/conference/:id',
        element: <ConferenceDetails></ConferenceDetails>,
        loader: () => fetch('../conference.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
