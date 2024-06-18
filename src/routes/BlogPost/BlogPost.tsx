import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Image } from 'antd';

import { useAppDispatch, useAppSelector } from 'hooks';

import { FAILED, IDLE, LOADING, SUCCEEDED } from 'constants/requestStates';

import { selectPostById, selectPostsError, selectPostsStatus } from 'store/posts/selectors';
import { fetchPostById } from 'store/posts/api';

import Loader from 'components/Loader';
import ErrorInfo from 'components/ErrorInfo';

import mountainsImg from './img/mountains.webp';

import * as S from './styled';

const BlogPost = () => {
    const { id } = useParams();

    const postId = parseInt(id!, 10);

    const dispatch = useAppDispatch();

    const post = useAppSelector(selectPostById(postId));
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
            {postsStatus === LOADING && <Loader />}

            {postsStatus === FAILED && postsError && <ErrorInfo message={postsError} />}

            {postsStatus === SUCCEEDED && (
                <>
                    <div>
                        <Typography.Title level={2}>{post.title}</Typography.Title>
                        <Typography.Text italic>{post.body}</Typography.Text>
                    </div>
                    <S.ImageContainer>
                        <Image src={mountainsImg} width={300} alt="mountain" />
                    </S.ImageContainer>
                </>
            )}
        </div>
    );
};

export default BlogPost;
