import { Idle, Loading, Success, Failure } from '../types';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostsState {
    posts: Post[];
    status: Idle | Loading | Success | Failure;
    error: string | null;
}

export type RootState = {
    posts: PostsState;
};
