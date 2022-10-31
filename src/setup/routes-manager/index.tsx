import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../../pages/main/mainPage';
import { All } from '../../pages/All';
import { Clothes } from '../../pages/Clothes';
import { Tech } from '../../pages/Tech';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  { path: '/All', element: <All /> },
  { path: '/Clothes', element: <Clothes /> },
  { path: '/Tech', element: <Tech /> },
]);

export { router };
