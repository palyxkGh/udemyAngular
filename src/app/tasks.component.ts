import {Component, EventEmitter, Injectable, Input, Output} from '@angular/core';
import {TasksService} from './services/tasks.service';

@Component({
  selector: 'app-tasks',
    providers:[
      TasksService
    ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
@Injectable({providedIn: 'root'})
export class TasksComponent {
    @Input({required: true}) userId!: string;
    @Input({required: true}) name!: string | undefined;
    isAddingTask = false;

    constructor(private tasksService: TasksService) {
    }
  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }
  onCompleteTask(id:string){
        return this.tasksService.removeTask(id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }
  onCloseAddTask(){
    this.isAddingTask = false;
  }

}
