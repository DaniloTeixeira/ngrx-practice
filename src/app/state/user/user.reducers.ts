import { createReducer, on } from '@ngrx/store';
import { userActions } from './user.actions';
import { UserState } from './user.state';

const initialState: UserState = {
  users: [],
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(userActions.getUsers, (state) => ({
    ...state,
  })),

  on(userActions.getUsersSuccess, (state, { payload }) => ({
    ...state,
    users: payload,
    error: null,
  })),

  on(userActions.getUsersError, (state, { payload }) => ({
    ...state,
    error: payload,
  })),

  on(userActions.createUser, (state, { payload }) => ({
    ...state,
    users: [...state.users, payload],
  })),

  on(userActions.deleteUser, (state, { payload }) => ({
    ...state,
    users: state.users.filter((u) => u.id !== payload),
  })),

  on(userActions.updateUser, (state, { payload }) => {
    let selectedUser = state.users.find((u) => u.id === payload.id);

    if (selectedUser) {
      selectedUser = payload;
    }

    return {
      ...state,
      users: [...state.users.filter((u) => u.id !== selectedUser?.id), payload],
    };
  })
);
