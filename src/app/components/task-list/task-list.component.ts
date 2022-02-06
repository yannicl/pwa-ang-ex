import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
