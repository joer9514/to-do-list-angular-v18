import { Injectable } from '@angular/core';
import {
  TaskEntity,
  TaskEntityWithoutID,
} from '@core/task/domain/entities/task.entity';
import { TaskRepository } from '@core/task/domain/repositories/task.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateTaskUseCase {
  constructor(private task: TaskRepository) {}

  updateTask(taskID: TaskEntity['id'], task: TaskEntityWithoutID): Observable<void> {
    return this.task.update(taskID, task);
  }
}
