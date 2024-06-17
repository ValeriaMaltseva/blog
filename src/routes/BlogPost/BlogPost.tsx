import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Image } from 'antd';

import { useAppDispatch, useAppSelector } from 'hooks';

import { FAILED, IDLE, LOADING, SUCCEEDED } from 'constants/requestStates';

import { AppDispatch, RootState } from 'configureStore';

import { selectPostById, selectPostsError, selectPostsStatus } from 'store/posts/selectors';
import { fetchPostById } from 'store/posts/api';

import Loader from 'components/Loader';
import ErrorInfo from 'components/ErrorInfo';

import mountainsImg from './img/mountains.webp';

import * as S from './styled';

const { Title, Text } = Typography;

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
            {postsStatus === LOADING && <Loader />}

            {postsStatus === FAILED && postsError && <ErrorInfo message={postsError} />}

            {postsStatus === SUCCEEDED && (
                <>
                    <div>
                        <Title level={2}>{post.title}</Title>
                        <Text italic>{post.body}</Text>
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
