import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ROUTES from 'constants/routes';

import Home from 'routes/Home';
import BlogPost from 'routes/BlogPost';

export const AppRouter = createBrowserRouter([
    {
        path: ROUTES.INDEX,
        element: <Home />,
    },
    {
        path: ROUTES.BLOG_POST,
        element: <BlogPost />,
    },
]);

export default AppRouter;
