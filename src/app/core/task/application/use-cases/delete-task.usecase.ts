import { Injectable } from '@angular/core';
import { TaskEntity } from '@core/task/domain/entities/task.entity';
import { TaskRepository } from '@core/task/domain/repositories/task.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeleteTaskUseCase {
  constructor(private task: TaskRepository) {}

  deleteTask(taskID: TaskEntity['id']): Observable<void> {
    return this.task.delete(taskID);
  }
}
