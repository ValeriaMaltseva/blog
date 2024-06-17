import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks';

import { FAILED, IDLE, LOADING, SUCCEEDED } from 'constants/requestStates';

import { toBlogPost } from 'helpers/navigation';

import { AppDispatch } from 'configureStore';

import { selectAllPosts, selectPostsStatus, selectPostsError } from 'store/posts/selectors';
import { fetchPosts } from 'store/posts/api';
import { Post } from 'store/posts/types';

const Home = () => {
    const dispatch = useAppDispatch<AppDispatch>();

    const posts = useAppSelector(selectAllPosts);
    const postsStatus = useAppSelector(selectPostsStatus);
    const postsError = useAppSelector(selectPostsError);

    useEffect(() => {
        if (postsStatus === IDLE) {
            dispatch(fetchPosts());
        }
    }, [dispatch, postsStatus]);

    return (
        <div>
            {postsStatus === LOADING && <div>Loading posts...</div>}

            {postsStatus === FAILED && <div>Error: {postsError}</div>}

            {postsStatus === SUCCEEDED && (
                <ul>
                    {posts.map((post: Post) => (
                        <li key={post.id}>
                            <Link to={toBlogPost(post.id)}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home;
