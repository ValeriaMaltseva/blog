import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from 'routes/Home';
import BlogPost from 'routes/BlogPost';

import ROUTES from 'constants/routes';

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
