import { FAILED, IDLE, LOADING, SUCCEEDED } from 'constants/requestStates';

export type Idle = typeof IDLE;
export type Loading = typeof LOADING;
export type Success = typeof SUCCEEDED;
export type Failure = typeof FAILED;
