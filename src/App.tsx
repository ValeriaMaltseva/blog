import React from 'react';
import { RouterProvider } from 'react-router-dom';

import RootLayout from 'layouts/RootLayout';

import AppRouter from 'routes/AppRouter';

const App = () => {
    return (
        <RootLayout>
            <RouterProvider router={AppRouter} />
        </RootLayout>
    );
};

export default App;
