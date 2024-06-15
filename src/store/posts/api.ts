import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Post } from './types';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (limit: number = 10) => {
    const response = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);

    return response.data;
});

export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (postId: number) => {
    const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    return response.data;
});
