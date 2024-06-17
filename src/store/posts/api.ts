import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Post } from './types';

type FetchPostsProps = {
    limit: number;
    start: number;
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ({ start = 0, limit = 10 }: FetchPostsProps) => {
    const response = await axios.get<Post[]>(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
    );

    return response.data;
});

export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (postId: number) => {
    const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    return response.data;
});
