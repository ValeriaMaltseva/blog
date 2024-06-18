import React from 'react';
import { Typography } from 'antd';

import BlogList from './components/BlogList';

const Home = () => (
    <>
        <Typography.Title level={2}>Mountain Trails Blog</Typography.Title>
        <BlogList />
    </>
);

export default Home;
