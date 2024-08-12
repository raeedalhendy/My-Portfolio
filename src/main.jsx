import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AllPage from './components/Home/AllPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProjectDetiles from './components/Home/CreativeWorks/ProjectDetiles';
import { Slide } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AllPage/>
  },
  {
    path: '/project-details/:id',
    element: <ProjectDetiles />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);