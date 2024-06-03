import { AppState } from '../app.state';

export const selectUsers = (state: AppState) => state.users.users;
