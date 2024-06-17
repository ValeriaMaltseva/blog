import { RootState } from './types';

export const selectAllPosts = (state: RootState) => state.posts.posts;
export const selectPostById = (state: RootState, id: number) => state.posts.posts.find((post) => post.id === id);

export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectPostsError = (state: RootState) => state.posts.error;
