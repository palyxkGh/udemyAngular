import { Component } from '@angular/core';
import {HeaderComponent} from './header.component';
import {UserComponent} from './user.component';
import {DUMMY_USERS} from './dummy-users';
import {TasksComponent} from './tasks.component';
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent,
    // NgFor,
    // NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser(){
    return this.users.find(user => this.selectedUserId === user.id);
  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
