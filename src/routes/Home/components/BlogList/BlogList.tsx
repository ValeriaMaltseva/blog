import React, { Dispatch, SetStateAction } from 'react';
import { Avatar, List } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';

import { toBlogPost } from 'helpers/navigation';

import { Post } from 'store/posts/types';

import IconText from 'components/IconText';

import mountainsImg from './img/mountains.webp';
import avatar from './img/avatar.webp';

import * as S from './styled';

const { Item } = List;
const { Meta } = Item;

type BlogListProps = {
    posts: Post[];
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    listLimit: number;
};

const BlogList = ({ posts, page, setPage, listLimit }: BlogListProps) => {
    const getCardTitleComponent = ({ id, title }: { id: number; title: string }) => (
        <S.Link to={toBlogPost(id)}>{title}</S.Link>
    );

    return (
        <List
            itemLayout="vertical"
            pagination={{
                current: page,
                pageSize: listLimit,
                total: 100,
                onChange: setPage,
                showSizeChanger: false,
            }}
            dataSource={posts}
            renderItem={(post) => (
                <Item
                    key={post.id}
                    actions={[
                        <IconText icon={StarOutlined} text="156" />,
                        <IconText icon={LikeOutlined} text="156" />,
                        <IconText icon={MessageOutlined} text="2" />,
                    ]}
                    extra={<img width={120} alt="logo" src={mountainsImg} />}
                >
                    <Meta
                        avatar={<Avatar src={avatar} />}
                        title={getCardTitleComponent({ id: post.id, title: post.title })}
                        description="Avatar description"
                    />
                    {post.body}
                </Item>
            )}
            bordered
        />
    );
};

export default BlogList;
