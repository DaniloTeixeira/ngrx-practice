import { User } from '../models/user.interface';

export const USERS: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    type: 'admin',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    type: 'viewer',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    type: 'viewer',
  },
];
