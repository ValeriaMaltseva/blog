import React, { useEffect, useState } from 'react';
import { Avatar, List } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';

import { useAppDispatch, useAppSelector } from 'hooks';

import { FAILED, LOADING, SUCCEEDED } from 'constants/requestStates';

import { toBlogPost } from 'helpers/navigation';

import { selectAllPosts, selectPostsStatus, selectPostsError } from 'store/posts/selectors';
import { fetchPosts } from 'store/posts/api';

import Loader from 'components/Loader';
import ErrorInfo from 'components/ErrorInfo';
import IconText from 'components/IconText';

import mountainsImg from './img/mountains.webp';
import avatar from './img/avatar.webp';

import * as S from './styled';

const POSTS_LIMIT = 10;

const BlogList = () => {
    const [page, setPage] = useState(1);

    const dispatch = useAppDispatch();

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
                <List
                    itemLayout="vertical"
                    pagination={{
                        current: page,
                        pageSize: POSTS_LIMIT,
                        total: 100,
                        onChange: setPage,
                        showSizeChanger: false,
                    }}
                    dataSource={posts}
                    renderItem={(post) => (
                        <List.Item
                            key={post.id}
                            actions={[
                                <IconText icon={StarOutlined} text="156" />,
                                <IconText icon={LikeOutlined} text="156" />,
                                <IconText icon={MessageOutlined} text="2" />,
                            ]}
                            extra={<img width={120} alt="logo" src={mountainsImg} />}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={avatar} />}
                                title={<S.Link to={toBlogPost(post.id)}>{post.title}</S.Link>}
                                description="Avatar description"
                            />
                            {post.body}
                        </List.Item>
                    )}
                    bordered
                />
            )}
        </>
    );
};

export default BlogList;
