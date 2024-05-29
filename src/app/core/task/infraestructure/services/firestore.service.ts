import { Injectable } from '@angular/core';
import {
  CollectionReference,
  Firestore,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import {
  TaskEntity,
  TaskEntityWithoutID,
} from '@core/task/domain/entities/task.entity';
import { TaskRepository } from '@core/task/domain/repositories/task.repository';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService extends TaskRepository {
  private tasksCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    super();
    this.tasksCollection = collection(this.firestore, 'tasks');
  }

  create(task: TaskEntityWithoutID): Observable<void> {
    const taskDocRef = doc(this.tasksCollection);
    const taskWithID: TaskEntity = { id: taskDocRef.id, ...task };

    return from(setDoc(taskDocRef, taskWithID)).pipe(map(() => void 0));
  }

  read(): Observable<TaskEntity[]> {
    return collectionData(this.tasksCollection);
  }

  readByIsCompleteStatus(taskIsComplete: boolean): Observable<TaskEntity[]> {
    const q = query(
      this.tasksCollection,
      where('isComplete', '==', taskIsComplete)
    );

    return from(getDocs(q)).pipe(
      map((querySnapshot) =>
        querySnapshot.docs.map((doc) => doc.data() as TaskEntity)
      )
    );
  }

  update(taskID: string, task: TaskEntityWithoutID): Observable<void> {
    const taskDocRef = doc(this.tasksCollection, taskID);
    return from(updateDoc(taskDocRef, task)).pipe(map(() => void 0));
  }

  delete(taskID: string): Observable<void> {
    const taskDocRef = doc(this.tasksCollection, taskID);
    return from(deleteDoc(taskDocRef)).pipe(map(() => void 0));
  }
}
