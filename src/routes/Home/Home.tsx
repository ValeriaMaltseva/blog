import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';

import { useAppDispatch, useAppSelector } from 'hooks';

import { FAILED, LOADING, SUCCEEDED } from 'constants/requestStates';

import { AppDispatch } from 'configureStore';

import { selectAllPosts, selectPostsStatus, selectPostsError } from 'store/posts/selectors';
import { fetchPosts } from 'store/posts/api';

import Loader from 'components/Loader';
import ErrorInfo from 'components/ErrorInfo';

import BlogList from './components/BlogList';

const { Title } = Typography;

const POSTS_LIMIT = 10;

const Home = () => {
    const [page, setPage] = useState(1);

    const dispatch = useAppDispatch<AppDispatch>();

    const posts = useAppSelector(selectAllPosts);
    const postsStatus = useAppSelector(selectPostsStatus);
    const postsError = useAppSelector(selectPostsError);

    useEffect(() => {
        dispatch(
            fetchPosts({
                start: (page - 1) * POSTS_LIMIT,
                limit: POSTS_LIMIT,
            })
        );
    }, [dispatch, page]);

    return (
        <>
            {postsStatus === LOADING && <Loader />}

            {postsStatus === FAILED && postsError && <ErrorInfo message={postsError} />}

            {postsStatus === SUCCEEDED && (
                <>
                    <Title level={2}>Mountain Trails Blog</Title>
                    <BlogList posts={posts} page={page} setPage={setPage} listLimit={POSTS_LIMIT} />
                </>
            )}
        </>
    );
};

export default Home;
