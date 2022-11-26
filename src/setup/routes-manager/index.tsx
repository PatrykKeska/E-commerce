import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import AllCategoryPage from '../../pages/AllCategoryPage';
import TechCategoryPage from '../../pages/TechCategoryPage';
import ClothesCategoryPage from '../../pages/ClothesCategoryPage';
import { ProductDetails } from '../../pages/Product-details-page';
import { CartPage } from '../../pages/Cart/components/cart-wrapper/cart';

const router = createBrowserRouter([
  { path: '/all', element: <AllCategoryPage /> },
  { path: '/all/:id', element: <ProductDetails /> },
  { path: '/:id', element: <ProductDetails /> },
  { path: '/clothes/', element: <ClothesCategoryPage /> },
  { path: '/clothes/:id', element: <ProductDetails /> },
  { path: '/tech', element: <TechCategoryPage /> },
  { path: '/tech/:id', element: <ProductDetails /> },
  { path: '/cart', element: <CartPage /> },
  { path: '*', element: <AllCategoryPage /> },
]);

export { router };
