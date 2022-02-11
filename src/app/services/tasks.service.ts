import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = TASKS;

  constructor() { }

  getTasks() : Task[] {
    return this.tasks;
  }
  
  removeTask(task: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
 
}
