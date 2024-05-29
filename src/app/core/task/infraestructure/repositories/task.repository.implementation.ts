import { Injectable } from '@angular/core';
import {
  TaskEntity,
  TaskEntityWithoutID,
} from '@core/task/domain/entities/task.entity';
import { TaskRepository } from '@core/task/domain/repositories/task.repository';
import { FirestoreService } from '@core/task/infraestructure/services/firestore.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskRepositoryImplementation extends TaskRepository {
  constructor(private database: FirestoreService) {
    super();
  }

  create(task: TaskEntityWithoutID): Observable<void> {
    return this.database.create(task);
  }

  read(): Observable<TaskEntity[]> {
    return this.database.read();
  }

  readByIsCompleteStatus(taskIsComplete: boolean): Observable<TaskEntity[]> {
    return this.database.readByIsCompleteStatus(taskIsComplete);
  }

  update(taskID: string, task: TaskEntityWithoutID): Observable<void> {
    return this.database.update(taskID, task);
  }

  delete(taskID: string): Observable<void> {
    return this.database.delete(taskID);
  }
}
