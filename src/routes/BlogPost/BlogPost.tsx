import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks';

import { FAILED, IDLE, LOADING, SUCCEEDED } from 'constants/requestStates';

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
        if (postsStatus === IDLE) {
            dispatch(fetchPostById(postId));
        }
    }, [dispatch, postsStatus, postId]);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            {postsStatus === LOADING && <div>Loading post...</div>}

            {postsStatus === FAILED && <div>Error: {postsError}</div>}

            {postsStatus === SUCCEEDED && (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    );
};

export default BlogPost;
