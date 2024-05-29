import { Injectable } from '@angular/core';
import { TaskEntityWithoutID } from '@core/task/domain/entities/task.entity';
import { TaskRepository } from '@core/task/domain/repositories/task.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateTaskUseCase {
  constructor(private task: TaskRepository) {}

  createTask(task: TaskEntityWithoutID): Observable<void> {
    return this.task.create(task);
  }
}
