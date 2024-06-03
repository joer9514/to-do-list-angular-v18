import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTaskUseCase } from '@core/task/application/use-cases/delete-task.usecase';
import { GetTasksUseCase } from '@core/task/application/use-cases/get-task.usecase';
import { UpdateTaskUseCase } from '@core/task/application/use-cases/update-task.usecase';
import {
  TaskEntity,
  TaskEntityWithoutID,
} from '@core/task/domain/entities/task.entity';
import { CardItemComponent } from '@ui/pages/home/components/card-item';
import { TasksFormComponent } from '@ui/pages/home/components/tasks-form';

import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'card-task-lists',
  imports: [CardItemComponent, AsyncPipe],
  templateUrl: './card-task-lists.component.html',
})
export class CardTaskListsComponent implements OnInit {
  public tasks$!: Observable<TaskEntity[]>;

  constructor(
    private _getTasks: GetTasksUseCase,
    private _updateTask: UpdateTaskUseCase,
    private _deleteTask: DeleteTaskUseCase,
    public dialog: MatDialog
  ) {}

  private loadTasks(): void {
    this.tasks$ = this._getTasks.getAllTasks();
  }

  public ngOnInit(): void {
    this.loadTasks();
  }

  public onCardTaskDone(task: TaskEntity): void {
    this._updateTask.updateTask(task.id, {
      ...task,
      isComplete: !task.isComplete,
    });
  }

  public onCardTaskEdit(task: TaskEntity): void {
    const dialogRef = this.dialog.open(TasksFormComponent, {
      width: '60rem',
      data: {
        title: 'form to edit this task',
        description:
          'Are you sure you want to edit this task? Remember that once edited you cannot go back.',
        task,
      },
    });

    dialogRef.afterClosed().subscribe((formData: TaskEntityWithoutID) => {
      if (formData) {
        this._updateTask.updateTask(task.id, { ...formData });
      }
    });
  }

  public onCardTaskDelete(task: TaskEntity): void {
    this._deleteTask.deleteTask(task.id);
  }
}
