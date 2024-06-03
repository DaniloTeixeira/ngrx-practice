import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.interface';

enum UserAction {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUsersError = '[User] Get Users Error',

  CreateUser = '[User] Create User',
  DeleteUser = '[User] Delete User',
  UpdateUser = '[User] Update User',
}

const getUsers = createAction(UserAction.GetUsers);

const getUsersSuccess = createAction(
  UserAction.GetUsersSuccess,
  props<{ payload: User[] }>()
);

const getUsersError = createAction(
  UserAction.GetUsersError,
  props<{ payload: string }>()
);

const createUser = createAction(
  UserAction.CreateUser,
  props<{ payload: User }>()
);

const deleteUser = createAction(
  UserAction.DeleteUser,
  props<{ payload: number }>()
);

const updateUser = createAction(
  UserAction.UpdateUser,
  props<{ payload: User }>()
);

export const userActions = {
  getUsers,
  getUsersSuccess,
  getUsersError,
  createUser,
  deleteUser,
  updateUser,
};
