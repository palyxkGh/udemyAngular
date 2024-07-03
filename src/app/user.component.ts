import {Component, computed, Input, Output, input, EventEmitter, output} from '@angular/core';

interface User {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter<string>()
  // select = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(()=> {
  //   return 'assets/users/' + this.avatar();
  // })
get imagePath(){
  return 'assets/users/' + this.user.avatar;
}

onSelectUser(){
  this.select.emit(this.user.id);
}

  }
