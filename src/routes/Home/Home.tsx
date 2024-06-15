import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks';

import { AppDispatch } from 'configureStore';

import { selectAllPosts, selectPostsStatus, selectPostsError } from 'store/posts/selectors';
import { fetchPosts } from 'store/posts/api';

import { toBlogPost } from 'helpers/navigation';

import { Post } from 'store/posts/types';

const Home = () => {
    const dispatch = useAppDispatch<AppDispatch>();

    const posts = useAppSelector(selectAllPosts);
    const postsStatus = useAppSelector(selectPostsStatus);
    const postsError = useAppSelector(selectPostsError);

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPosts());
        }
    }, [dispatch, postsStatus]);

    return (
        <div>
            {postsStatus === 'loading' && <div>Loading posts...</div>}
            {postsStatus === 'failed' && <div>Error: {postsError}</div>}
            {postsStatus === 'succeeded' && (
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
