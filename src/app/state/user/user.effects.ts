import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserService } from '../../services/user.service';
import { userActions } from './user.actions';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.getUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map((payload) => userActions.getUsersSuccess({ payload })),
          catchError((e) =>
            of(userActions.getUsersError({ payload: e.message }))
          )
        )
      )
    )
  );
}
