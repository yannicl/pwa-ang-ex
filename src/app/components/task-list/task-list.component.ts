import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
 

  removeTask(task: Task) {
    console.log("supprimer tâche");
    this.taskService.removeTask(task);
  }


}
