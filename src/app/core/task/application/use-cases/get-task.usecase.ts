import { Injectable } from '@angular/core';
import { TaskEntity } from '@core/task/domain/entities/task.entity';
import { TaskRepository } from '@core/task/domain/repositories/task.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetTasksUseCase {
  constructor(private task: TaskRepository) {}

  getAllTasks(): Observable<TaskEntity[]> {
    return this.task.read();
  }

  getTasksByIsCompleteStatus(
    taskIsComplete: TaskEntity['isComplete']
  ): Observable<TaskEntity[]> {
    return this.task.readByIsCompleteStatus(taskIsComplete);
  }
}
