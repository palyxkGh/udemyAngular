import { Component } from '@angular/core';
import {DUMMY_USERS} from './dummy-users';
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: false,
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
