import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { userReducer } from './user/user.reducers';

export const appReducers: ActionReducerMap<AppState> = {
  users: userReducer,
};
