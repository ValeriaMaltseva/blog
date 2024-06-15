import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks';

import { AppDispatch, RootState } from 'configureStore';

import { selectPostById, selectPostsError, selectPostsStatus } from 'store/posts/selectors';

import { fetchPostById } from 'store/posts/api';

const BlogPost = () => {
    const { id } = useParams();

    const postId = parseInt(id!, 10);

    const dispatch = useAppDispatch<AppDispatch>();
    const post = useAppSelector((state: RootState) => selectPostById(state, postId));
    const postsStatus = useAppSelector(selectPostsStatus);
    const postsError = useAppSelector(selectPostsError);

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPostById(postId));
        }
    }, [dispatch, postsStatus, postId]);

    if (postsStatus === 'loading') {
        return <div>Loading post...</div>;
    }

    if (postsStatus === 'failed') {
        return <div>Error: {postsError}</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default BlogPost;
