import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../../pages/main/mainPage';
import { All } from '../../pages/All';
import { Tech } from '../../pages/Tech';
import React from 'react';
import Clothes from '../../pages/Clothes';
import {ProductDetails} from '../../pages/Product-details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  { path: '/all', element: <All /> },
  { path: '/all/:id', element: <ProductDetails /> },
  { path: '/clothes/', element: <Clothes /> },
  { path: '/clothes/:id', element: <ProductDetails /> },
  { path: '/tech', element: <Tech /> },
  { path: '/tech/:id', element: <ProductDetails /> },
]);

export { router };
