import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import React from 'react';
import ExerciseDetail from './pages/ExerciseDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'exercise/:exerciseId',
        element: <ExerciseDetail />,
      },
    ],
  },
]);

export default router;
