import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../../pages/main/mainPage';
import React from 'react';
import { ProductDetailsPage } from '../../pages/Product-details-page';
import AllCategoryPage from '../../pages/AllCategoryPage';
import TechCategoryPage from '../../pages/TechCategoryPage';
import ClothesCategoryPage from '../../pages/ClothesCategoryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  { path: '/all', element: <AllCategoryPage /> },
  { path: '/all/:id', element: <ProductDetailsPage /> },
  { path: '/clothes/', element: <ClothesCategoryPage /> },
  { path: '/clothes/:id', element: <ProductDetailsPage /> },
  { path: '/tech', element: <TechCategoryPage /> },
  { path: '/tech/:id', element: <ProductDetailsPage /> },
]);

export { router };
