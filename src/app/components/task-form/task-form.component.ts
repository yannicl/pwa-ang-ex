import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  text: string = "";
  date: string = "";

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.taskService.createNewTask(this.text, new Date(this.date));
    this.text = "";
    this.date = "";
  }


}
