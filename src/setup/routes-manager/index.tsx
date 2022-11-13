import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../../pages/main/mainPage';
import React from 'react';
import AllCategoryPage from '../../pages/AllCategoryPage';
import TechCategoryPage from '../../pages/TechCategoryPage';
import ClothesCategoryPage from '../../pages/ClothesCategoryPage';
import { ProductDetails } from '../../pages/Product-details-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  { path: '/all', element: <AllCategoryPage /> },
  { path: '/all/:id', element: <ProductDetails /> },
  { path: '/clothes/', element: <ClothesCategoryPage /> },
  { path: '/clothes/:id', element: <ProductDetails /> },
  { path: '/tech', element: <TechCategoryPage /> },
  { path: '/tech/:id', element: <ProductDetails /> },
]);

export { router };
