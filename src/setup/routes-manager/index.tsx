import {createBrowserRouter} from 'react-router-dom';
import {MainPage} from '../../pages/main/mainPage';
import {Women} from '../../pages/women';
import {Men} from '../../pages/men';
import {Kids} from '../../pages/kids';
import React from 'react';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    { path: '/women', element: <Women /> },
    { path: '/men', element: <Men /> },
    { path: '/kids', element: <Kids /> },
]);


export  {router}