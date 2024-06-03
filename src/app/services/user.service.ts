import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { USERS } from '../data/users';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public getUsers(): Observable<User[]> {
    // return throwError(() => new Error('Error: 500 - Internal Server Error'));

    return of(USERS).pipe(delay(1000));
  }
}
