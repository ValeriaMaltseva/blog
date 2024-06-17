import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FAILED, IDLE, LOADING, SUCCEEDED } from 'constants/requestStates';

import { fetchPosts, fetchPostById } from './api';

import { Post, PostsState } from './types';

const initialState: PostsState = {
    posts: [],
    status: IDLE,
    error: null,
};

export const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = LOADING;
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.status = SUCCEEDED;

                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = FAILED;

                state.error = action.error.message || null;
            })
            .addCase(fetchPostById.pending, (state) => {
                state.status = LOADING;
            })
            .addCase(fetchPostById.fulfilled, (state, action: PayloadAction<Post>) => {
                state.status = SUCCEEDED;

                const existingPost = state.posts.find((post) => post.id === action.payload.id);

                if (!existingPost) {
                    state.posts.push(action.payload);
                }
            })
            .addCase(fetchPostById.rejected, (state, action) => {
                state.status = FAILED;

                state.error = action.error.message || null;
            });
    },
});

export default slice.reducer;
