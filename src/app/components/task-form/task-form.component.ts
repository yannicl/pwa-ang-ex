import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  text: string = "";
  date: string = "";
  classForDescription: string = "full-width"

  @Output() userActvityCompleted = new EventEmitter();

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
  }

  onCancel() : void {
    this.text = "";
    this.date = "";
    this.userActvityCompleted.emit();
  }
 

  onSubmit(): void {
    if (this.text.length > 0) {
      this.taskService.createNewTask(this.text, new Date(this.date));
    }
    this.text = "";
    this.date = "";
  }


}
