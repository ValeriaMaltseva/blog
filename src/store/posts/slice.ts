import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, PostsState } from './types';

import { fetchPosts, fetchPostById } from './api';

const initialState: PostsState = {
    posts: [],
    status: 'idle',
    error: null,
};

export const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.status = 'succeeded';

                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';

                state.error = action.error.message || null;
            })
            .addCase(fetchPostById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPostById.fulfilled, (state, action: PayloadAction<Post>) => {
                state.status = 'succeeded';

                const existingPost = state.posts.find((post) => post.id === action.payload.id);

                if (!existingPost) {
                    state.posts.push(action.payload);
                }
            })
            .addCase(fetchPostById.rejected, (state, action) => {
                state.status = 'failed';

                state.error = action.error.message || null;
            });
    },
});

export default slice.reducer;
