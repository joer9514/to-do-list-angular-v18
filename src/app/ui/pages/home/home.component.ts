import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CreateTaskUseCase } from '@core/task/application/use-cases/create-task.usecase';
import { TaskEntityWithoutID } from '@core/task/domain/entities/task.entity';
import { DialogData } from '@ui/components/dialog';
import { WrapperContainerComponent } from '@ui/layouts/wrapper-container';
import { CardTaskListsComponent } from '@ui/pages/home/components/card-task-lists';
import { TasksFormComponent } from './components/tasks-form';

@Component({
  standalone: true,
  selector: 'home-page',
  imports: [
    WrapperContainerComponent,
    CardTaskListsComponent,
    MatIconModule,
    MatButton,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(
    private _createTask: CreateTaskUseCase,
    public dialog: MatDialog
  ) {}

  public handleAddNewTask(): void {
    const dialogRef = this.dialog.open(TasksFormComponent, {
      width: '60rem',
      data: <DialogData>{
        title: 'Excellent we believe a new task!',
        description: 'Remember to fill in all the data ',
      },
    });

    dialogRef.afterClosed().subscribe((formData: TaskEntityWithoutID) => {
      if (formData) {
        this._createTask.createTask(formData);
      }
    });
  }
}
