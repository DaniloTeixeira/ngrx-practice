import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from './models/user.interface';
import { UserType } from './models/user.type';
import { userActions } from './state/user/user.actions';
import { selectUsers } from './state/user/user.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly store = inject(Store);

  public users$ = this.store.select(selectUsers);

  public name = '';
  public email = '';
  public type!: UserType;

  public selectedUser?: User;

  ngOnInit(): void {
    this.getUsers();
  }

  public onAddUser(): void {
    const newUser = this.getCreateUserPayload();

    this.store.dispatch(userActions.createUser({ payload: newUser }));
  }

  public onUpdateUser(): void {
    const payload = this.getUpdateUserPayload();

    if (!payload) return;

    this.store.dispatch(userActions.updateUser({ payload }));
  }

  public onDeleteUser(user: User): void {
    this.store.dispatch(userActions.deleteUser({ payload: user.id }));
  }

  public onSelectUser(user: User): void {
    this.selectedUser = user;

    this.name = user.name;
    this.email = user.email;
    this.type = user.type;
  }

  private getUsers(): void {
    this.store.dispatch(userActions.getUsers());
  }

  private getCreateUserPayload(): User {
    return {
      id: Math.floor(Math.random() * 100),
      name: this.name,
      email: this.email,
      type: this.type,
    };
  }

  private getUpdateUserPayload(): User | undefined {
    if (!this.selectedUser) return;

    return {
      id: this.selectedUser.id,
      name: this.name,
      email: this.email,
      type: this.type,
    };
  }
}
