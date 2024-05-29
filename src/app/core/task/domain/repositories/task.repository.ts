import {
  TaskEntity,
  TaskEntityWithoutID,
} from '@core/task/domain/entities/task.entity';
import { Observable } from 'rxjs';

export abstract class TaskRepository {
  abstract create(task: TaskEntityWithoutID): Observable<void>;

  abstract read(): Observable<TaskEntity[]>;

  abstract readByIsCompleteStatus(
    taskIsComplete: TaskEntity['isComplete']
  ): Observable<TaskEntity[]>;

  abstract update(
    taskID: TaskEntity['id'],
    task: TaskEntityWithoutID
  ): Observable<void>;

  abstract delete(taskID: TaskEntity['id']): Observable<void>;
}
