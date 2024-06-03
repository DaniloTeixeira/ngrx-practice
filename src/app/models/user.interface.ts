import { UserType } from './user.type';

export interface User {
  id: number;
  name: string;
  email: string;
  type: UserType;
}
