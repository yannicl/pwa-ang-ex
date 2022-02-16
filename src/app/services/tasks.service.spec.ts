import { TestBed } from '@angular/core/testing';

import { TasksService } from './tasks.service';

describe('When a new is created in TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksService);
    service.createNewTask("nouveau", new Date());
  });

  it('should be 3 tasks', () => {
    expect(service.getTasks().length).toBe(3);
  });

});
