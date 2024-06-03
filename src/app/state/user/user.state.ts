import { User } from '../../models/user.interface';

export interface UserState {
  users: User[];
  error: string | null;
}
